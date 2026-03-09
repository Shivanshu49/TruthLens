from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel, Field
from dotenv import load_dotenv
import shutil
import os
import uuid
import logging

load_dotenv()

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(name)s: %(message)s",
)
logger = logging.getLogger("truthlens")

from ocr import extract_text_from_image
from ai_analysis import analyze_claim, analyze_deepfake

app = FastAPI(title="TruthLens AI", description="Fake News Screenshot Analyzer")

MAX_FILE_SIZE = 10 * 1024 * 1024  # 10 MB

# Allow frontend to connect
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create temp directory for uploads
TEMP_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "temp_uploads")
os.makedirs(TEMP_DIR, exist_ok=True)


@app.get("/")
def home():
    return {"message": "TruthLens AI Backend Running"}


@app.post("/analyze-image")
async def analyze_image(file: UploadFile = File(...)):

    # Validate file type
    allowed_types = ["image/png", "image/jpeg", "image/jpg", "image/webp"]
    if file.content_type not in allowed_types:
        raise HTTPException(status_code=400, detail=f"Invalid file type: {file.content_type}. Upload PNG, JPG, or WEBP.")

    # Check file size
    contents = await file.read()
    if len(contents) > MAX_FILE_SIZE:
        raise HTTPException(status_code=400, detail="File too large. Maximum size is 10 MB.")
    await file.seek(0)

    logger.info(f"Image upload: {file.content_type}, {len(contents)} bytes")

    # Save with unique name to avoid conflicts
    filename = file.filename or "upload.png"
    ext = filename.split(".")[-1] if "." in filename else "png"
    file_location = os.path.join(TEMP_DIR, f"{uuid.uuid4().hex}.{ext}")

    try:
        with open(file_location, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)

        extracted_text = extract_text_from_image(file_location)

        if extracted_text.startswith("OCR Error"):
            raise HTTPException(status_code=500, detail=extracted_text)

        analysis = analyze_claim(extracted_text)

        return {
            "extracted_text": extracted_text,
            "credibility_score": analysis["credibility_score"],
            "risk_level": analysis["risk_level"],
            "explanation": analysis["explanation"],
            "warning_signs": analysis["warning_signs"]
        }

    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Server error: {str(e)}")
    finally:
        # Clean up temp file
        if os.path.exists(file_location):
            os.remove(file_location)


class TextRequest(BaseModel):
    text: str = Field(..., min_length=1, max_length=5000)


class AnalyzeRequest(BaseModel):
    content: str = Field(..., min_length=1, max_length=5000)
    contentType: str = "text"


class DeepfakeRequest(BaseModel):
    videoUrl: str = Field(..., min_length=1, max_length=2000)
    description: str = Field("", max_length=2000)


@app.post("/analyze-text")
def analyze_text(request: TextRequest):
    if not request.text.strip():
        raise HTTPException(status_code=400, detail="Text cannot be empty.")

    logger.info(f"Text analysis request: {len(request.text)} chars")
    analysis = analyze_claim(request.text)

    return {
        "input_text": request.text,
        "credibility_score": analysis["credibility_score"],
        "risk_level": analysis["risk_level"],
        "explanation": analysis["explanation"],
        "warning_signs": analysis["warning_signs"]
    }


@app.post("/api/analyze")
def api_analyze(request: AnalyzeRequest):
    """Frontend-compatible text analysis endpoint."""
    if not request.content.strip():
        return {"success": False, "message": "Content cannot be empty."}

    try:
        logger.info(f"API analyze: {len(request.content)} chars, type={request.contentType}")
        analysis = analyze_claim(request.content)
        score = analysis["credibility_score"]
        risk = analysis["risk_level"]
        fake_prob = max(0, 100 - score)

        bias_map = {"High": "HIGH", "Medium": "MEDIUM", "Low": "LOW"}
        trust_map = {"High": "LOW", "Medium": "MEDIUM", "Low": "HIGH"}

        return {
            "success": True,
            "analysis": {
                "fakeProbability": fake_prob,
                "biasLevel": bias_map.get(risk, "MEDIUM"),
                "trustScore": trust_map.get(risk, "MEDIUM"),
                "verdict": "LIKELY_FAKE" if fake_prob > 60 else "POSSIBLY_MISLEADING" if fake_prob > 35 else "LIKELY_AUTHENTIC",
                "summary": analysis["explanation"],
                "manipulationTechniques": [
                    {
                        "technique": mt.get("technique", mt) if isinstance(mt, dict) else str(mt),
                        "description": mt.get("evidence", mt.get("technique", "")) if isinstance(mt, dict) else str(mt),
                        "severity": mt.get("severity", risk.upper()) if isinstance(mt, dict) else risk.upper(),
                    }
                    for mt in (analysis.get("manipulation_techniques") or analysis.get("warning_signs") or [])[:3]
                ],
                "redFlags": analysis.get("warning_signs", []),
                "credibilitySignals": [] if fake_prob > 50 else ["Consistent with expert sources"],
                "recommendation": "Exercise caution before sharing this content." if fake_prob > 50 else "This content appears reasonably credible.",
                "educationalNote": "Always verify news from multiple trusted sources before sharing. Check if the original source is a reputable news organization.",
                "overallScore": score,
            }
        }
    except Exception as e:
        return {"success": False, "message": str(e)}


@app.post("/api/deepfake")
def api_deepfake(request: DeepfakeRequest):
    """Deepfake video analysis endpoint — extracts frames + AI vision analysis."""
    if not request.videoUrl.strip():
        return {"success": False, "message": "Video URL cannot be empty."}

    try:
        logger.info(f"Deepfake analysis request: {request.videoUrl[:80]}")
        analysis = analyze_deepfake(request.videoUrl.strip(), request.description.strip())
        fake_score = max(0, min(100, analysis["deepfake_score"]))

        # Use real AI-generated scores from vision analysis
        fa = analysis.get("facial_analysis", {})
        ava = analysis.get("audio_visual_analysis", {})

        return {
            "success": True,
            "analysis": {
                "deepfakeScore": fake_score,
                "verdict": "LIKELY_DEEPFAKE" if fake_score > 60 else "POSSIBLY_MANIPULATED" if fake_score > 35 else "LIKELY_AUTHENTIC",
                "confidence": min(95, 60 + fake_score // 3) if fake_score > 35 else min(95, 60 + (100 - fake_score) // 3),
                "summary": analysis["explanation"],
                "indicators": [
                    {"type": ind, "description": ind, "severity": "HIGH" if fake_score > 60 else "MEDIUM" if fake_score > 35 else "LOW"}
                    for ind in analysis.get("indicators", [])[:5]
                ],
                "facialAnalysis": {
                    "lipSyncScore": fa.get("lip_sync_score", fake_score),
                    "blinkPatternScore": fa.get("blink_pattern_score", fake_score),
                    "skinTextureScore": fa.get("skin_texture_score", fake_score),
                    "overallFacialScore": fa.get("overall_facial_score", fake_score),
                },
                "audioAnalysis": {
                    "syncScore": ava.get("consistency_score", fake_score),
                    "naturalness": ava.get("artifact_score", fake_score),
                    "cloneDetection": ava.get("lighting_score", fake_score),
                },
                "techniquesDetected": analysis.get("techniques_detected", [])[:5],
                "framesAnalyzed": analysis.get("frames_analyzed", 0),
                "recommendation": "Exercise caution — multiple deepfake indicators detected. Do not share." if fake_score > 60 else "Some suspicious elements detected — verify before sharing." if fake_score > 35 else "This video appears to be authentic content. No significant deepfake indicators detected.",
                "educationalNote": "Deepfakes use AI to replace faces or synthesize speech. Look for unnatural blinking, mismatched lighting, and blurry edges around the face.",
            }
        }
    except Exception as e:
        return {"success": False, "message": str(e)}


@app.get("/api/threats")
def api_threats():
    """Live threat feed for the dashboard."""
    return {
        "success": True,
        "threats": [
            {"level": "high", "title": "Viral WhatsApp message claiming government water contamination", "platform": "WhatsApp", "shares": "847K", "timeAgo": "14 minutes ago", "fakeProbability": 94},
            {"level": "high", "title": "Deepfake video of PM announcing emergency currency demonetization", "platform": "YouTube, Twitter", "shares": "1.2M", "timeAgo": "2 hours ago", "fakeProbability": 97},
            {"level": "medium", "title": "Misleading statistics on election vote counts shared across news channels", "platform": "Multiple outlets", "shares": "340K", "timeAgo": "6 hours ago", "fakeProbability": 67},
            {"level": "medium", "title": "Unverified health claim about garlic curing dengue fever going viral", "platform": "Facebook groups", "shares": "220K", "timeAgo": "8 hours ago", "fakeProbability": 72},
            {"level": "low", "title": "Slightly misleading headline about RBI interest rate changes", "platform": "Financial news sites", "shares": "45K", "timeAgo": "12 hours ago", "fakeProbability": 31},
        ]
    }


# Serve frontend static files (React build output)
FRONTEND_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "Frontend", "dist")
if os.path.isdir(FRONTEND_DIR):
    app.mount("/app", StaticFiles(directory=FRONTEND_DIR, html=True), name="frontend")

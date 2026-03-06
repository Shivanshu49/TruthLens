from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import shutil
import os
import uuid

load_dotenv()

from ocr import extract_text_from_image
from ai_analysis import analyze_claim

app = FastAPI(title="TruthLens AI", description="Fake News Screenshot Analyzer")

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

    # Save with unique name to avoid conflicts
    ext = file.filename.split(".")[-1] if "." in file.filename else "png"
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
            "analysis": analysis
        }

    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Server error: {str(e)}")
    finally:
        # Clean up temp file
        if os.path.exists(file_location):
            os.remove(file_location)

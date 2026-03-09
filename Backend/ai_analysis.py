from google import genai
from google.genai import types
import os
import json
import logging
import hashlib
import tempfile
import base64
from functools import lru_cache

logger = logging.getLogger("truthlens")

_client = None


def get_client():
    """Lazy-initialize the Gemini client. Raises ValueError if API key is missing."""
    global _client
    if _client is None:
        api_key = os.getenv("GEMINI_API_KEY")
        if not api_key:
            raise ValueError(
                "GEMINI_API_KEY not set. Add it to Backend/.env file:\n"
                "GEMINI_API_KEY=your_api_key_here"
            )
        _client = genai.Client(api_key=api_key)
    return _client


CLAIM_SYSTEM_PROMPT = """You are TruthLens AI, an expert misinformation detection system.
You analyze claims for credibility using journalistic standards.
You MUST respond with valid JSON only. No markdown, no code fences, no explanation outside JSON."""

CLAIM_USER_PROMPT = """Analyze this claim for misinformation:

"{claim}"

Evaluate using these criteria:
1. SOURCE CREDIBILITY: Does it cite reputable sources? Or anonymous/vague attribution?
2. EMOTIONAL MANIPULATION: Does it use fear, outrage, or urgency to bypass critical thinking?
3. FACTUAL ACCURACY: Are specific facts verifiable? Are statistics plausible?
4. VIRAL PATTERNS: Does it match known misinformation patterns (forwarded chains, "share before deleted", fake authority)?
5. LANGUAGE ANALYSIS: Exaggerated superlatives? ALL CAPS? Excessive punctuation?
6. LOGICAL CONSISTENCY: Internal contradictions? Non-sequiturs?

Return this exact JSON structure:
{{
  "credibility_score": <0-100 integer>,
  "risk_level": "<Low|Medium|High>",
  "explanation": "<2-3 sentence assessment>",
  "warning_signs": ["<sign1>", "<sign2>", "<sign3>"],
  "claim_type": "<news|health|political|financial|social|other>",
  "manipulation_techniques": [
    {{"technique": "<name>", "evidence": "<specific text or pattern found>", "severity": "<LOW|MEDIUM|HIGH>"}}
  ]
}}"""


def _hash_text(text: str) -> str:
    return hashlib.sha256(text.strip().lower().encode()).hexdigest()


@lru_cache(maxsize=128)
def _cached_analyze(text_hash: str, text: str):
    """Cached AI analysis — same claim text returns cached result."""
    client = get_client()
    prompt = CLAIM_SYSTEM_PROMPT + "\n\n" + CLAIM_USER_PROMPT.format(claim=text)
    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt,
        config={
            "response_mime_type": "application/json",
            "temperature": 0.1,
            "max_output_tokens": 2048,
        },
    )
    return response.text or ""


def analyze_claim(text):
    raw = ""
    try:
        text_hash = _hash_text(text)
        raw = _cached_analyze(text_hash, text.strip())
        result = json.loads(raw)

        # Ensure required fields with defaults
        return {
            "credibility_score": max(0, min(100, int(result.get("credibility_score", 50)))),
            "risk_level": result.get("risk_level", "Medium"),
            "explanation": result.get("explanation", ""),
            "warning_signs": result.get("warning_signs", []),
            "claim_type": result.get("claim_type", "other"),
            "manipulation_techniques": result.get("manipulation_techniques", []),
        }
    except json.JSONDecodeError as e:
        logger.warning(f"JSON parse failed, falling back to regex: {e}")
        return _fallback_parse(raw)
    except Exception as e:
        logger.error(f"analyze_claim error: {e}")
        return {
            "credibility_score": 0,
            "risk_level": "Unknown",
            "explanation": f"Analysis temporarily unavailable.",
            "warning_signs": [],
            "claim_type": "other",
            "manipulation_techniques": [],
        }


def _fallback_parse(raw_text):
    """Regex fallback if JSON parsing fails."""
    import re
    result = {
        "credibility_score": 50, "risk_level": "Medium",
        "explanation": "", "warning_signs": [],
        "claim_type": "other", "manipulation_techniques": [],
    }
    score_match = re.search(r"credibility_score[\"']?\s*:\s*(\d+)", raw_text)
    if score_match:
        result["credibility_score"] = max(0, min(100, int(score_match.group(1))))
    risk_match = re.search(r"risk_level[\"']?\s*:\s*[\"'](Low|Medium|High)", raw_text, re.IGNORECASE)
    if risk_match:
        result["risk_level"] = risk_match.group(1).capitalize()
    expl_match = re.search(r"explanation[\"']?\s*:\s*[\"'](.+?)[\"']", raw_text, re.DOTALL)
    if expl_match:
        result["explanation"] = expl_match.group(1).strip()
    return result


DEEPFAKE_SYSTEM_PROMPT = """You are a deepfake video detection expert.
You analyze video frames for signs of AI generation or manipulation.
You MUST respond with valid JSON only. No markdown, no code fences."""

DEEPFAKE_VISION_PROMPT = """You are a deepfake detection expert analyzing extracted frames from a video.

Video URL: {video_url}
User description: {description}
Number of frames analyzed: {num_frames}

Examine these {num_frames} video frames carefully for deepfake indicators:

VISUAL CHECKS:
1. FACIAL CONSISTENCY: Do faces look natural across frames? Any warping, blurring, or unnatural edges around face/jawline/hairline?
2. EYE & BLINK PATTERNS: Do eyes look realistic? Any misalignment, unusual reflections, or dead/glass-like appearance?
3. SKIN TEXTURE: Is skin unnaturally smooth, plasticky, or inconsistent between frames?
4. LIP SYNC: Do lip shapes look natural and consistent with speech?
5. LIGHTING: Is lighting on the face consistent with the background? Any impossible shadows?
6. ARTIFACTS: Any visible GAN artifacts, flickering, blending seams, or compression anomalies around the face region?
7. BACKGROUND: Does the background have unusual distortions, especially near head/body edges?
8. TEMPORAL CONSISTENCY: Do features change unnaturally between frames?

CONTEXT CHECKS:
- Is a public figure doing/saying something out of character?
- Does the content make shocking claims?

SCORING GUIDE:
- 0-20: Clearly authentic, no manipulation signs
- 21-40: Minor artifacts but likely authentic (compression, low quality)
- 41-60: Suspicious, some deepfake indicators present
- 61-80: Likely manipulated, multiple clear indicators
- 81-100: Almost certainly AI-generated/deepfake

Return this exact JSON:
{{
  "deepfake_score": <0-100 integer>,
  "risk_level": "<Low|Medium|High>",
  "explanation": "<2-3 sentences analyzing what you see in the frames>",
  "indicators": ["<specific visual indicator found>", "<indicator2>", "<indicator3>"],
  "facial_analysis": {{
    "lip_sync_score": <0-100, 0=perfect sync, 100=clearly fake>,
    "blink_pattern_score": <0-100>,
    "skin_texture_score": <0-100>,
    "overall_facial_score": <0-100>
  }},
  "audio_visual_analysis": {{
    "consistency_score": <0-100, 0=perfectly consistent, 100=clearly inconsistent>,
    "artifact_score": <0-100>,
    "lighting_score": <0-100>
  }},
  "techniques_detected": ["<technique if any>"]
}}"""

DEEPFAKE_TEXT_ONLY_PROMPT = """Assess this video for deepfake likelihood based on context only (frames could not be extracted):

Video URL: {video_url}
Description: {description}

IMPORTANT: Without visual analysis, be conservative. Most videos are real.
- Standard content from known platforms: score 10-25
- Suspicious context (public figure + unusual claims): score 40-70
- Only score 70+ if description explicitly mentions face-swapping, AI generation, or manipulation

Return this exact JSON:
{{
  "deepfake_score": <0-100 integer>,
  "risk_level": "<Low|Medium|High>",
  "explanation": "<2-3 sentences. Note that only context analysis was possible.>",
  "indicators": ["<indicator1>", "<indicator2>", "<indicator3>"],
  "facial_analysis": {{
    "lip_sync_score": <0-100>,
    "blink_pattern_score": <0-100>,
    "skin_texture_score": <0-100>,
    "overall_facial_score": <0-100>
  }},
  "audio_visual_analysis": {{
    "consistency_score": <0-100>,
    "artifact_score": <0-100>,
    "lighting_score": <0-100>
  }},
  "techniques_detected": ["<technique if any>"]
}}"""


def _extract_video_frames(video_url: str, max_frames: int = 5) -> list[str]:
    """Download video and extract sample frames as base64 JPEG strings."""
    import cv2
    import yt_dlp

    temp_dir = tempfile.mkdtemp()
    video_path = os.path.join(temp_dir, "video.mp4")
    frames = []

    try:
        ydl_opts = {
            'outtmpl': video_path,
            'format': 'worst[ext=mp4]/worst',  # smallest file for speed
            'quiet': True,
            'no_warnings': True,
            'socket_timeout': 15,
            'max_filesize': 50 * 1024 * 1024,  # 50 MB max
        }
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            ydl.download([video_url])

        if not os.path.exists(video_path):
            logger.warning("Video download produced no file")
            return []

        cap = cv2.VideoCapture(video_path)
        total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
        fps = cap.get(cv2.CAP_PROP_FPS) or 30

        if total_frames <= 0:
            cap.release()
            return []

        # Sample frames evenly across the video
        duration_sec = total_frames / fps
        # Pick frames at 10%, 30%, 50%, 70%, 90% of the video
        sample_points = [0.1, 0.3, 0.5, 0.7, 0.9][:max_frames]
        frame_indices = [int(p * total_frames) for p in sample_points]

        for idx in frame_indices:
            cap.set(cv2.CAP_PROP_POS_FRAMES, idx)
            ret, frame = cap.read()
            if ret:
                # Resize to max 512px wide for API efficiency
                h, w = frame.shape[:2]
                if w > 512:
                    scale = 512 / w
                    frame = cv2.resize(frame, (512, int(h * scale)))
                _, buf = cv2.imencode('.jpg', frame, [cv2.IMWRITE_JPEG_QUALITY, 80])
                frames.append(base64.b64encode(buf).decode('utf-8'))

        cap.release()
        logger.info(f"Extracted {len(frames)} frames from video ({duration_sec:.1f}s, {total_frames} total frames)")

    except Exception as e:
        logger.warning(f"Frame extraction failed: {e}")
    finally:
        # Clean up temp files
        import shutil
        shutil.rmtree(temp_dir, ignore_errors=True)

    return frames


def analyze_deepfake(video_url, description=""):
    """Analyze video for deepfakes using frame extraction + Gemini Vision."""
    raw = ""
    try:
        client = get_client()

        # Try to extract actual video frames
        logger.info(f"Deepfake analysis: extracting frames from {video_url}")
        frames = _extract_video_frames(video_url)

        if frames:
            # Build multimodal content with frames
            logger.info(f"Analyzing {len(frames)} frames with Gemini Vision")
            prompt_text = DEEPFAKE_SYSTEM_PROMPT + "\n\n" + DEEPFAKE_VISION_PROMPT.format(
                video_url=video_url,
                description=description or "No description provided",
                num_frames=len(frames),
            )

            parts = [types.Part.from_text(text=prompt_text)]
            for i, frame_b64 in enumerate(frames):
                parts.append(types.Part.from_bytes(
                    data=base64.b64decode(frame_b64),
                    mime_type="image/jpeg",
                ))

            response = client.models.generate_content(
                model="gemini-2.5-flash",
                contents=[types.Content(role="user", parts=parts)],
                config={
                    "response_mime_type": "application/json",
                    "temperature": 0.1,
                    "max_output_tokens": 1500,
                },
            )
            raw = response.text or ""
            logger.info("Vision-based deepfake analysis complete")
        else:
            # Fallback to text-only analysis
            logger.info("No frames extracted, falling back to context-only analysis")
            prompt = DEEPFAKE_SYSTEM_PROMPT + "\n\n" + DEEPFAKE_TEXT_ONLY_PROMPT.format(
                video_url=video_url,
                description=description or "No description provided"
            )
            response = client.models.generate_content(
                model="gemini-2.5-flash",
                contents=prompt,
                config={
                    "response_mime_type": "application/json",
                    "temperature": 0.1,
                    "max_output_tokens": 1500,
                },
            )
            raw = response.text or ""

        result = json.loads(raw)

        return {
            "deepfake_score": max(0, min(100, int(result.get("deepfake_score", 25)))),
            "risk_level": result.get("risk_level", "Low"),
            "explanation": result.get("explanation", ""),
            "indicators": result.get("indicators", []),
            "facial_analysis": result.get("facial_analysis", {}),
            "audio_visual_analysis": result.get("audio_visual_analysis", {}),
            "techniques_detected": result.get("techniques_detected", []),
            "frames_analyzed": len(frames),
        }
    except json.JSONDecodeError:
        logger.warning(f"Deepfake JSON parse failed: {raw[:200]}")
        return {"deepfake_score": 25, "risk_level": "Low", "explanation": "Analysis could not parse result.", "indicators": [], "facial_analysis": {}, "audio_visual_analysis": {}, "techniques_detected": [], "frames_analyzed": 0}
    except Exception as e:
        logger.error(f"analyze_deepfake error: {e}")
        return {"deepfake_score": 25, "risk_level": "Unknown", "explanation": f"Analysis error: {str(e)}", "indicators": [], "facial_analysis": {}, "audio_visual_analysis": {}, "techniques_detected": [], "frames_analyzed": 0}

from google import genai
import os
import json
import logging
import hashlib
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
You assess the likelihood that video content is AI-generated or manipulated.
You MUST respond with valid JSON only. No markdown, no code fences."""

DEEPFAKE_USER_PROMPT = """Assess this video for deepfake likelihood:

Video URL: {video_url}
Description: {description}

IMPORTANT RULES:
- Videos from official/verified channels (news, government, celebrities' official accounts) are LIKELY AUTHENTIC (score 5-20).
- Standard YouTube content (vlogs, tutorials, music, trailers, live streams, entertainment) is LIKELY AUTHENTIC (score 5-25).
- Everyday content (cooking, gaming, travel, sports, education) is LIKELY AUTHENTIC (score 5-15).
- Only flag as potential deepfake (score 50+) if the description mentions: a public figure saying something out of character, political manipulation, celebrity doing something unusual, face-swapped content, AI-generated voice, or shocking claims attributed to known people.
- A video being "unverifiable" does NOT make it a deepfake. Most videos are real.
- Live streams and real-time content are very unlikely to be deepfakes (score 5-15).
- Do NOT default to high scores. Most videos on the internet are real.

Return this exact JSON:
{{
  "deepfake_score": <0-100 integer>,
  "risk_level": "<Low|Medium|High>",
  "explanation": "<2-3 sentences. Be specific about WHY.>",
  "indicators": ["<indicator1>", "<indicator2>", "<indicator3>"]
}}"""


@lru_cache(maxsize=64)
def _cached_deepfake(url_hash: str, video_url: str, description: str):
    """Cached deepfake analysis."""
    client = get_client()
    prompt = DEEPFAKE_SYSTEM_PROMPT + "\n\n" + DEEPFAKE_USER_PROMPT.format(
        video_url=video_url,
        description=description or "No description provided"
    )
    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt,
        config={
            "response_mime_type": "application/json",
            "temperature": 0.1,
            "max_output_tokens": 800,
        },
    )
    return response.text or ""


def analyze_deepfake(video_url, description=""):
    try:
        url_hash = _hash_text(video_url + description)
        raw = _cached_deepfake(url_hash, video_url, description)
        result = json.loads(raw)

        return {
            "deepfake_score": max(0, min(100, int(result.get("deepfake_score", 25)))),
            "risk_level": result.get("risk_level", "Low"),
            "explanation": result.get("explanation", ""),
            "indicators": result.get("indicators", []),
        }
    except json.JSONDecodeError:
        logger.warning("Deepfake JSON parse failed")
        return {"deepfake_score": 25, "risk_level": "Low", "explanation": "Analysis could not parse result.", "indicators": []}
    except Exception as e:
        logger.error(f"analyze_deepfake error: {e}")
        return {"deepfake_score": 25, "risk_level": "Unknown", "explanation": "Analysis temporarily unavailable.", "indicators": []}

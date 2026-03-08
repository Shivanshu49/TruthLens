from groq import Groq
import os
import re


def get_client():
    api_key = os.getenv("GROQ_API_KEY")
    if not api_key:
        raise ValueError("GROQ_API_KEY not set in .env file")
    return Groq(api_key=api_key)


def parse_analysis(raw_text):
    """Parse Gemini's response into structured fields."""
    result = {
        "credibility_score": 50,
        "risk_level": "Medium",
        "explanation": "",
        "warning_signs": []
    }

    score_match = re.search(r"Credibility Score:\s*(\d+)", raw_text)
    if score_match:
        result["credibility_score"] = int(score_match.group(1))

    risk_match = re.search(r"Risk Level:\s*(Low|Medium|High)", raw_text, re.IGNORECASE)
    if risk_match:
        result["risk_level"] = risk_match.group(1).capitalize()

    explanation_match = re.search(r"Explanation:\s*(.+?)(?=Warning Signs:|$)", raw_text, re.DOTALL)
    if explanation_match:
        result["explanation"] = explanation_match.group(1).strip()

    signs_match = re.search(r"Warning Signs:(.*)", raw_text, re.DOTALL)
    if signs_match:
        signs_text = signs_match.group(1).strip()
        signs = re.findall(r"[•\-\*]\s*(.+)", signs_text)
        result["warning_signs"] = [s.strip() for s in signs if s.strip()]

    return result


def analyze_claim(text):
    try:
        client = get_client()

        prompt = f"""
You are a misinformation detection expert. Analyze this news claim carefully.

Claim:
{text}

Respond in this EXACT format:
Credibility Score: [0-100]
Risk Level: [Low/Medium/High]
Explanation: [2-3 sentence explanation of why this claim may or may not be misinformation]
Warning Signs:
• [sign 1]
• [sign 2]
• [sign 3]

Warning signs examples: Emotional language, No credible sources cited, Viral misinformation pattern, Exaggerated claims, Lack of scientific evidence, Misleading statistics, Appeal to fear, Unverified origin.
If the claim appears credible, list positive indicators instead (e.g., Cites reputable sources, Consistent with expert consensus).
"""

        response = client.chat.completions.create(
            model="llama-3.3-70b-versatile",
            messages=[{"role": "user", "content": prompt}]
        )

        return parse_analysis(response.choices[0].message.content)

    except Exception as e:
        return {
            "credibility_score": 0,
            "risk_level": "Unknown",
            "explanation": f"AI Analysis Error: {str(e)}",
            "warning_signs": []
        }


def parse_deepfake_analysis(raw_text):
    """Parse AI response for deepfake video analysis."""
    result = {
        "deepfake_score": 25,
        "risk_level": "Low",
        "explanation": "",
        "indicators": []
    }

    score_match = re.search(r"Deepfake Score:\s*(\d+)", raw_text)
    if score_match:
        result["deepfake_score"] = max(0, min(100, int(score_match.group(1))))

    risk_match = re.search(r"Risk Level:\s*(Low|Medium|High)", raw_text, re.IGNORECASE)
    if risk_match:
        result["risk_level"] = risk_match.group(1).capitalize()

    explanation_match = re.search(r"Explanation:\s*(.+?)(?=Indicators:|$)", raw_text, re.DOTALL)
    if explanation_match:
        result["explanation"] = explanation_match.group(1).strip()

    indicators_match = re.search(r"Indicators:(.*)", raw_text, re.DOTALL)
    if indicators_match:
        indicators_text = indicators_match.group(1).strip()
        indicators = re.findall(r"[•\-\*]\s*(.+)", indicators_text)
        result["indicators"] = [s.strip() for s in indicators if s.strip()]

    return result


def analyze_deepfake(video_url, description=""):
    """Dedicated deepfake analysis with a context-aware prompt."""
    try:
        client = get_client()

        prompt = f"""You are a deepfake video detection expert. Your job is to assess the LIKELIHOOD that a video is AI-generated or manipulated (deepfake), based on the video URL source and any description provided.

IMPORTANT RULES:
- Videos from official/verified channels (news outlets, government, celebrities' official accounts, major brands) are LIKELY AUTHENTIC (low deepfake score 5-20).
- Standard YouTube videos, vlogs, tutorials, music videos, movie trailers, live streams, and entertainment content are LIKELY AUTHENTIC (low deepfake score 5-25).
- Videos with ordinary everyday content (cooking, gaming, travel, sports, education) are LIKELY AUTHENTIC (low deepfake score 5-15).
- Only flag as potential deepfake (score 50+) if the description specifically mentions: a public figure saying something out of character, political manipulation, celebrity doing something unusual, face-swapped content, AI-generated voice, or urgent/shocking claims attributed to known people.
- A video being "unverifiable" does NOT make it a deepfake. Most normal videos are simply regular content.
- Live streams and real-time content are very unlikely to be deepfakes (score 5-15).
- Do NOT default to high scores. Most videos on the internet are real.

Video URL: {video_url}
Description: {description if description else "No description provided"}

Respond in this EXACT format:
Deepfake Score: [0-100] (0=definitely real, 100=definitely deepfake)
Risk Level: [Low/Medium/High]
Explanation: [2-3 sentences explaining your assessment. Be specific about WHY you think it is or isn't a deepfake.]
Indicators:
• [indicator 1]
• [indicator 2]
• [indicator 3]

For AUTHENTIC content, list positive indicators like: Official source, Normal everyday content, Consistent with channel history, Live stream content, No manipulation signs.
For SUSPICIOUS content, list concerns like: Public figure acting out of character, Viral claim without verification, Known deepfake pattern, Urgent political content from unknown source."""

        response = client.chat.completions.create(
            model="llama-3.3-70b-versatile",
            messages=[{"role": "user", "content": prompt}]
        )

        return parse_deepfake_analysis(response.choices[0].message.content)

    except Exception as e:
        return {
            "deepfake_score": 25,
            "risk_level": "Unknown",
            "explanation": f"AI Analysis Error: {str(e)}",
            "indicators": []
        }

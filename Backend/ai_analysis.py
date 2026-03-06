from google import genai
import os
import re


def get_client():
    api_key = os.getenv("GEMINI_API_KEY")
    if not api_key:
        raise ValueError("GEMINI_API_KEY not set in .env file")
    return genai.Client(api_key=api_key)


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

        response = client.models.generate_content(
            model="gemini-2.0-flash",
            contents=prompt
        )

        return parse_analysis(response.text)

    except Exception as e:
        return {
            "credibility_score": 0,
            "risk_level": "Unknown",
            "explanation": f"AI Analysis Error: {str(e)}",
            "warning_signs": []
        }

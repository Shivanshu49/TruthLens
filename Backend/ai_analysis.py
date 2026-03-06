from google import genai
import os


def get_client():
    api_key = os.getenv("GEMINI_API_KEY")
    if not api_key:
        raise ValueError("GEMINI_API_KEY not set in .env file")
    return genai.Client(api_key=api_key)


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
"""

        response = client.models.generate_content(
            model="gemini-2.0-flash",
            contents=prompt
        )

        return response.text

    except Exception as e:
        return f"AI Analysis Error: {str(e)}"

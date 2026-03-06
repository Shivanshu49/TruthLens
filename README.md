# TruthLens AI 🔍

### AI-Powered Misinformation Detection System

TruthLens AI is an AI-powered tool designed to help users detect potential **misinformation in screenshots, forwarded messages, and social media content**.

In today's digital world, misinformation spreads rapidly through messaging platforms and social media. Many users unknowingly share misleading information because verifying claims quickly is difficult.

TruthLens AI addresses this challenge by extracting text from screenshots using **OCR** and analyzing the content using **Generative AI** to evaluate whether a claim may be false, misleading, or unsupported by reliable sources.

The system provides a **credibility score, risk level, and explanation** to help users understand why the information may be suspicious or trustworthy.

---

# Problem Statement 🌍

Misinformation spreads rapidly across:

* WhatsApp forwards
* Social media posts
* Viral screenshots
* Unverified news messages

Users often lack tools to **quickly verify information before sharing it**.

TruthLens AI aims to solve this by providing a **simple AI-powered fact-check assistant**.

---

# Solution 💡

TruthLens AI combines **OCR + Generative AI** to analyze claims from images or text.

The system workflow:

1. User uploads a screenshot or enters text
2. OCR extracts the text from the image
3. AI analyzes the claim
4. System returns credibility score and explanation

---

# Key Features 🚀

* Screenshot misinformation detection
* Text claim analysis
* AI-powered credibility scoring
* Risk level classification (Low / Medium / High)
* AI-generated explanations for suspicious claims
* Educational insights into misinformation patterns

---

# System Architecture 🏗

```
User Uploads Screenshot / Text
            │
            ▼
Frontend Interface
            │
            ▼
FastAPI Backend
            │
            ▼
OCR Engine (EasyOCR)
Extract text from image
            │
            ▼
Gemini Generative AI
Analyze claim credibility
            │
            ▼
Result Generation
Credibility Score + Explanation
            │
            ▼
User Receives Analysis
```

---

# Tech Stack ⚙️

### Backend

* Python
* FastAPI

### AI / NLP

* Google Gemini (Generative AI)

### OCR

* EasyOCR

### Libraries

* easyocr
* python-dotenv
* google-generativeai

---

# Project Structure 📂

```
TruthLens
│
├── Backend
│   ├── main.py
│   ├── ocr.py
│   ├── ai_analysis.py
│   ├── .env
│
├── requirements.txt
├── README.md
├── .gitignore
```

---

# Installation & Setup 🛠

## 1 Clone Repository

```bash
git clone https://github.com/Shivanshu49/TruthLens.git
cd TruthLens
```

---

## 2 Create Virtual Environment

```bash
python -m venv venv
source venv/bin/activate
```

Windows:

```bash
venv\Scripts\activate
```

---

## 3 Install Dependencies

```bash
pip install -r requirements.txt
```

---

## 4 Configure Environment Variables

Create `Backend/.env`

```
GEMINI_API_KEY=your_api_key_here
```

---

## 5 Run Backend Server

```bash
cd Backend
uvicorn main:app --reload
```

Open:

```
http://127.0.0.1:8000/docs
```

---

# Example Output 📊

```
Credibility Score: 35%

Risk Level: High

Explanation:
This claim lacks evidence from trusted sources and contains exaggerated language commonly found in misinformation.
```

---

# Future Improvements 🔮

* Browser extension for instant fact-checking
* Real-time social media content analysis
* Multilingual misinformation detection
* Integration with fact-check databases
* Deepfake and manipulated image detection

---

# Hackathon Project 🏆

This project was developed as part of a **hackathon focused on combating misinformation using AI technologies**.

---

# Contributors 👨‍💻

* Shivanshu Dixit
* Team Members (add here)

# TruthLens AI 🔍

### AI-Powered Misinformation & Deepfake Detection Platform

> **[Live Demo](https://truth-lens-nine-sand.vercel.app/)** &nbsp;|&nbsp; **[API](https://truthlens-gxnp.onrender.com/docs)**

TruthLens AI is a full-stack platform that helps users detect **misinformation in text, screenshots, and deepfake videos** using AI. Built with a **FastAPI** backend powered by **Google Gemini AI (Gemini 2.5 Flash)** and a premium **React + TypeScript** frontend with glassmorphism UI, multi-language support, and real-time analysis.

| | URL |
|---|---|
| **Frontend** | https://truth-lens-nine-sand.vercel.app/ |
| **Backend API** | https://truthlens-gxnp.onrender.com |
| **API Docs** | https://truthlens-gxnp.onrender.com/docs |

---

## The Problem 🌍

Misinformation and AI-generated deepfakes spread rapidly across:

* WhatsApp forwards & viral screenshots
* Deepfake videos of public figures on YouTube, Twitter/X, Instagram
* Unverified news and social media posts
* AI-generated voice clones and face-swaps

Users lack tools to **quickly verify content before sharing** — TruthLens AI solves this.

---

## Solution 💡

TruthLens AI combines **OCR + Generative AI + Deepfake Analysis** in one platform:

1. **Text Analysis** — Paste any claim, headline, or forwarded message → get AI-powered credibility scoring
2. **Screenshot OCR** — Upload a screenshot → Tesseract OCR extracts text → AI analyzes the claim
3. **Deepfake Video Detection** — Paste a video URL → real video frames are extracted with yt-dlp + OpenCV → Gemini Vision analyzes each frame for deepfake indicators
4. **Live Threat Feed** — Dashboard showing trending misinformation threats across platforms

---

## Key Features 🚀

* 🔬 **Screenshot Misinformation Detection** — OCR text extraction → AI credibility analysis
* 🎬 **Deepfake Video Analyzer** — AI-powered deepfake scoring with facial & audio analysis breakdown
* 📝 **Text Claim Analysis** — Direct text input for instant fact-checking
* 📊 **Credibility Scoring** — 0–100 score with risk level (Low/Medium/High)
* ⚠️ **Warning Signs Detection** — Emotional language, missing sources, viral patterns, etc.
* 📡 **Live Threat Feed** — Real-time trending misinformation alerts
* 🌐 **Multi-Language UI** — English, Hindi, Tamil, Telugu, Bengali, Marathi
* 🎨 **Premium Glass UI** — Dark/light themes, liquid canvas, bot cursor, smooth animations
* 📱 **Fully Responsive** — Works on desktop, tablet, and mobile

---

## Tech Stack ⚙️

| Layer | Technology |
|-------|-----------|
| **Backend** | Python, FastAPI, Uvicorn |
| **AI Engine** | Google Gemini API (Gemini 2.5 Flash) |
| **OCR** | pytesseract + Tesseract |
| **Video Analysis** | yt-dlp, OpenCV (real frame extraction) |
| **Frontend** | React 19, TypeScript, Vite |
| **Styling** | Custom CSS with glassmorphism design system |
| **Deployment** | Vercel (frontend), Render (backend) |
| **Languages** | 6 languages (EN, HI, TA, TE, BN, MR) |

---

## System Architecture 🏗

```
┌────────────────────────────────────────────┐
│  React + TypeScript UI  (Vercel)           │
│  (Text Scanner / Deepfake Analyzer / Feed) │
└─────────────────┬──────────────────────────┘
                  │ HTTPS (REST API)
┌─────────────────▼──────────────────────────┐
│         FastAPI Backend  (Render)           │
│                                             │
│  POST /api/analyze    → Text Analysis       │
│  POST /api/deepfake   → Deepfake Detection  │
│  POST /analyze-image  → OCR + Analysis      │
│  GET  /api/threats    → Threat Feed         │
└──┬──────────┬──────────────┬───────────────┘
   │          │              │
┌──▼───┐ ┌───▼────┐  ┌──────▼───────┐
│Tesse-│ │yt-dlp +│  │  Gemini AI   │
│ract  │ │OpenCV  │  │  2.5 Flash   │
│(OCR) │ │(Video  │  │  (Multimodal │
│      │ │Frames) │  │    Vision)   │
└──────┘ └────────┘  └──────────────┘
```

---

## Project Structure 📂

```
TruthLens/
├── Backend/
│   ├── main.py              # FastAPI server & all API endpoints
│   ├── ai_analysis.py       # Gemini AI integration (text + deepfake + vision)
│   ├── ocr.py               # Tesseract OCR text extraction
│   ├── requirements.txt     # Python dependencies
│   ├── .env                 # GEMINI_API_KEY (not committed)
│   └── venv/                # Python virtual environment
│
├── Frontend/
│   ├── src/
│   │   ├── App.tsx          # Main React app (all components)
│   │   ├── translations.ts  # Multi-language translations (6 languages)
│   │   ├── index.css        # Full CSS design system
│   │   └── main.tsx         # React entry point
│   ├── index.html
│   ├── package.json
│   ├── tsconfig.json
│   └── vite.config.ts
│
├── main.py              # Root entry point (Render deployment shim)
├── requirements.txt
├── runtime.txt          # Python version for Render (3.11.9)
├── render.yaml          # Render deployment config
├── Procfile             # Render process file
├── .gitignore
└── README.md
```

---

## Installation & Setup 🛠

### 1. Clone Repository

```bash
git clone https://github.com/Shivanshu49/TruthLens.git
cd TruthLens
```

### 2. Backend Setup

```bash
cd Backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS/Linux
source venv/bin/activate

pip install -r ../requirements.txt
```

### 3. Configure API Key

Create `Backend/.env`:

```
GEMINI_API_KEY=your_gemini_api_key_here
```

Get a free API key at [Google AI Studio](https://aistudio.google.com/apikey)

### 4. Start Backend

```bash
cd Backend
uvicorn main:app --host 127.0.0.1 --port 8000
```

### 5. Frontend Setup

```bash
cd Frontend
npm install
npm run dev
```

### 6. Open the App

* **Frontend:** [http://localhost:5173](http://localhost:5173)
* **API Docs:** [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)

---

## Deployment 🌐

The app is deployed and live:

| Service | Platform | URL |
|---------|----------|-----|
| Frontend | **Vercel** | https://truth-lens-nine-sand.vercel.app/ |
| Backend | **Render** | https://truthlens-gxnp.onrender.com |

### Environment Variables (Render)

| Variable | Description |
|----------|-------------|
| `GEMINI_API_KEY` | Google Gemini API key |
| `PYTHON_VERSION` | `3.11.9` |

### Frontend Environment (Vercel)

The frontend reads the backend URL from `VITE_API_BASE`. If not set, it defaults to the Render production URL.

For local development, create `Frontend/.env.local`:
```
VITE_API_BASE=http://localhost:8000/api
```

---

## API Endpoints 📡

| Method | Endpoint | Description |
|--------|------------------|----------------------------------------------|
| GET | `/` | Health check |
| POST | `/analyze-image` | Upload screenshot → OCR + AI analysis |
| POST | `/analyze-text` | Submit text claim for analysis |
| POST | `/api/analyze` | Frontend text analysis (structured response) |
| POST | `/api/deepfake` | Deepfake video analysis |
| GET | `/api/threats` | Live threat feed |

### POST /api/analyze

```json
{ "content": "Breaking: Government bans all social media", "contentType": "text" }
```

### POST /api/deepfake

```json
{ "videoUrl": "https://youtube.com/watch?v=...", "description": "PM announcing emergency policy" }
```

---

## Example: Text Analysis 📊

```json
{
  "success": true,
  "analysis": {
    "fakeProbability": 85,
    "biasLevel": "HIGH",
    "trustScore": "LOW",
    "verdict": "LIKELY_FAKE",
    "summary": "This claim lacks credible sources and uses emotional language...",
    "manipulationTechniques": [
      { "technique": "Appeal to fear", "description": "Appeal to fear", "severity": "HIGH" }
    ],
    "recommendation": "Exercise caution before sharing this content."
  }
}
```

## Example: Deepfake Analysis 🎬

```json
{
  "success": true,
  "analysis": {
    "deepfakeScore": 5,
    "verdict": "LIKELY_AUTHENTIC",
    "confidence": 91,
    "summary": "This appears to be standard YouTube content with no deepfake indicators.",
    "facialAnalysis": { "lipSyncScore": 10, "blinkPatternScore": 12, "skinTextureScore": 15, "overallFacialScore": 5 },
    "audioAnalysis": { "syncScore": 10, "naturalness": 12, "cloneDetection": 10 },
    "recommendation": "This video appears to be authentic content."
  }
}
```

---

## Screenshots 🖼️

### Text Scanner
> Paste any claim or forwarded message → get instant AI-powered credibility analysis with fake probability, bias level, and trust score.

### Deepfake Video Analyzer
> Enter a video URL → get deepfake score with facial analysis bars, audio analysis, detected techniques, and a confidence verdict.

### Live Threat Feed
> Real-time dashboard of trending misinformation across WhatsApp, YouTube, Twitter, and Facebook.

---

## How It Works 🧠

| Step | What Happens |
|------|-------------|
| 1 | User inputs text, uploads screenshot, or pastes video URL |
| 2 | Backend receives request via FastAPI |
| 3 | For images: Tesseract OCR extracts text |
| 4 | AI engine (Gemini 2.5 Flash) analyzes the content |
| 5 | For text: Misinformation detection prompt evaluates credibility |
| 6 | For video: yt-dlp downloads video → OpenCV extracts 5 frames → Gemini Vision analyzes each frame |
| 7 | Structured result returned to frontend with scores and explanations |

---

## Deepfake Detection Logic 🎯

The deepfake analyzer uses a **context-aware AI prompt** that understands:

* ✅ Official channels, live streams, normal content → **Low score (5-25%)**
* ✅ Music videos, tutorials, vlogs, sports → **Authentic (5-15%)**
* ⚠️ Unknown sources with shocking claims → **Medium score (35-60%)**
* 🚨 Public figures acting out of character, leaked videos, face-swap patterns → **High score (60-95%)**

It does NOT blindly flag all videos as deepfakes — only content with genuine manipulation indicators.

---

## Future Improvements 🔮

* 🔌 Browser extension for instant fact-checking
* 📸 Reverse image search integration
* � More languages and regional misinformation patterns
* 📊 User history and saved analyses
* 🤖 WhatsApp/Telegram bot integration
* 🔐 User authentication and rate limiting

---

## Contributors 👨‍💻

* **Shivanshu Dixit** — Full Stack Development & AI Integration

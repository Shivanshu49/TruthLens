import pytesseract
from PIL import Image
import logging
import shutil
import platform

logger = logging.getLogger("truthlens")

# Auto-detect Tesseract binary location
if platform.system() == "Windows":
    pytesseract.pytesseract.tesseract_cmd = r"C:\Program Files\Tesseract-OCR\tesseract.exe"
else:
    # Linux (Render, etc.) — find tesseract in PATH
    _tess = shutil.which("tesseract")
    if _tess:
        pytesseract.pytesseract.tesseract_cmd = _tess


def extract_text_from_image(image_path: str) -> str:
    try:
        logger.info(f"Running OCR on: {image_path}")
        img = Image.open(image_path)
        text = pytesseract.image_to_string(img).strip()

        if text:
            return text
        else:
            return "No text detected"
    except Exception as e:
        return f"OCR Error: {str(e)}"

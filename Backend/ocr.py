import pytesseract
from PIL import Image
import logging

logger = logging.getLogger("truthlens")

# Point to the Tesseract binary on Windows
pytesseract.pytesseract.tesseract_cmd = r"C:\Program Files\Tesseract-OCR\tesseract.exe"


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

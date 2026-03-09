import easyocr
import logging

logger = logging.getLogger("truthlens")

_reader = None


def _get_reader():
    """Lazy-load EasyOCR reader on first use instead of at import time."""
    global _reader
    if _reader is None:
        logger.info("Initializing EasyOCR reader (first use)...")
        _reader = easyocr.Reader(['en'], gpu=False)
    return _reader


def extract_text_from_image(image_path: str) -> str:
    try:
        reader = _get_reader()
        results = reader.readtext(image_path, detail=0)

        if results:
            return " ".join(str(item) for item in results)
        else:
            return "No text detected"
    except Exception as e:
        return f"OCR Error: {str(e)}"

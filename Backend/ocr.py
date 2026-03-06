import easyocr

# Initialize reader once (downloads model on first run)
reader = easyocr.Reader(['en'], gpu=False)


def extract_text_from_image(image_path: str) -> str:
    try:
        results = reader.readtext(image_path, detail=0)

        if results:
            return " ".join(str(item) for item in results)
        else:
            return "No text detected"
    except Exception as e:
        return f"OCR Error: {str(e)}"

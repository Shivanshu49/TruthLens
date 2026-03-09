"""Root-level entry point for Render deployment.
Imports the FastAPI app from Backend/main.py so that
'uvicorn main:app' works from the repo root.
"""
import sys
import os
import importlib.util

# Add Backend/ to sys.path so its internal imports (ai_analysis, ocr, etc.) resolve
backend_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), "Backend")
sys.path.insert(0, backend_dir)

# Load Backend/main.py by file path to avoid circular import with this file
_spec = importlib.util.spec_from_file_location(
    "backend_main", os.path.join(backend_dir, "main.py")
)
_mod = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(_mod)

app = _mod.app

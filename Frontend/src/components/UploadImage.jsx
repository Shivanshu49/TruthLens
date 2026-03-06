import { useState, useRef } from 'react';

export default function UploadImage({ onResult, onLoading }) {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef();

  function handleFile(f) {
    if (!f) return;
    setFile(f);
    setPreview(URL.createObjectURL(f));
  }

  function handleDrop(e) {
    e.preventDefault();
    setDragging(false);
    const f = e.dataTransfer.files[0];
    if (f && f.type.startsWith('image/')) handleFile(f);
  }

  async function analyze() {
    if (!file) return;
    onLoading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('/analyze-image', {
        method: 'POST',
        body: formData,
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.detail || 'Server error');
      }
      const data = await res.json();
      onResult(data);
    } catch (e) {
      onResult({ error: e.message });
    } finally {
      onLoading(false);
    }
  }

  return (
    <div className="space-y-4">
      <div
        className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors ${
          dragging
            ? 'border-cyan-400 bg-cyan-400/5'
            : 'border-white/15 hover:border-cyan-400/50'
        }`}
        onClick={() => inputRef.current.click()}
        onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
      >
        {preview ? (
          <img
            src={preview}
            alt="Preview"
            className="max-h-48 mx-auto rounded-lg"
          />
        ) : (
          <>
            <div className="text-4xl mb-2">📤</div>
            <p className="text-gray-400">
              Click or drag & drop a screenshot
            </p>
            <p className="text-gray-600 text-sm mt-1">
              PNG, JPG, WEBP supported
            </p>
          </>
        )}
        <input
          ref={inputRef}
          type="file"
          accept="image/png,image/jpeg,image/webp"
          className="hidden"
          onChange={(e) => handleFile(e.target.files[0])}
        />
      </div>

      {file && (
        <p className="text-cyan-400 text-sm truncate">📎 {file.name}</p>
      )}

      <button
        onClick={analyze}
        disabled={!file}
        className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed transition-opacity cursor-pointer"
      >
        Analyze Screenshot
      </button>
    </div>
  );
}

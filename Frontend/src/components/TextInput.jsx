import { useState } from 'react';

export default function TextInput({ onResult, onLoading }) {
  const [text, setText] = useState('');

  async function analyze() {
    if (!text.trim()) return;
    onLoading(true);

    try {
      const res = await fetch('/analyze-text', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: text.trim() }),
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
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste the news claim or message here..."
        rows={5}
        className="w-full rounded-xl bg-white/5 border border-white/15 p-4 text-gray-200 placeholder-gray-500 resize-y focus:outline-none focus:border-cyan-400 transition-colors"
      />
      <button
        onClick={analyze}
        disabled={!text.trim()}
        className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed transition-opacity cursor-pointer"
      >
        Analyze Text
      </button>
    </div>
  );
}

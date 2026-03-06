import { useState } from 'react';
import UploadImage from './components/UploadImage';
import TextInput from './components/TextInput';
import ResultCard from './components/ResultCard';
import Spinner from './components/Spinner';

export default function App() {
  const [tab, setTab] = useState('image');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  function handleResult(data) {
    setResult(data);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-gray-200">
      <div className="max-w-2xl mx-auto px-4 py-12">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-white">
            🔍 Truth<span className="text-cyan-400">Lens</span> AI
          </h1>
          <p className="text-gray-400 mt-2">
            AI-Powered Misinformation Detector
          </p>
        </header>

        {/* Input Card */}
        <div className="bg-white/[0.06] border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
          {/* Tabs */}
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => { setTab('image'); setResult(null); }}
              className={`flex-1 py-3 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                tab === 'image'
                  ? 'bg-cyan-400/15 border border-cyan-400 text-cyan-400'
                  : 'border border-white/15 text-gray-400 hover:border-white/30'
              }`}
            >
              📷 Upload Screenshot
            </button>
            <button
              onClick={() => { setTab('text'); setResult(null); }}
              className={`flex-1 py-3 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                tab === 'text'
                  ? 'bg-cyan-400/15 border border-cyan-400 text-cyan-400'
                  : 'border border-white/15 text-gray-400 hover:border-white/30'
              }`}
            >
              📝 Paste Text
            </button>
          </div>

          {/* Tab Content */}
          {tab === 'image' ? (
            <UploadImage onResult={handleResult} onLoading={setLoading} />
          ) : (
            <TextInput onResult={handleResult} onLoading={setLoading} />
          )}
        </div>

        {/* Loading */}
        {loading && <Spinner />}

        {/* Result */}
        {!loading && result && <ResultCard result={result} />}
      </div>
    </div>
  );
}

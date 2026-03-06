export default function ResultCard({ result }) {
  if (!result) return null;

  if (result.error) {
    return (
      <div className="mt-6 bg-red-500/10 border border-red-500/30 rounded-2xl p-6">
        <p className="text-red-400 font-medium">❌ Error: {result.error}</p>
      </div>
    );
  }

  const score = result.credibility_score ?? 0;
  const risk = result.risk_level ?? 'Unknown';
  const explanation = result.explanation ?? '';
  const signs = result.warning_signs ?? [];
  const extractedText = result.extracted_text;

  const riskColor = {
    High: { ring: 'border-red-500', bg: 'bg-red-500/15', text: 'text-red-400', badge: 'bg-red-500/20 text-red-400' },
    Medium: { ring: 'border-amber-500', bg: 'bg-amber-500/15', text: 'text-amber-400', badge: 'bg-amber-500/20 text-amber-400' },
    Low: { ring: 'border-emerald-500', bg: 'bg-emerald-500/15', text: 'text-emerald-400', badge: 'bg-emerald-500/20 text-emerald-400' },
  }[risk] || { ring: 'border-gray-500', bg: 'bg-gray-500/15', text: 'text-gray-400', badge: 'bg-gray-500/20 text-gray-400' };

  return (
    <div className="mt-6 bg-white/[0.04] border border-white/10 rounded-2xl p-6 backdrop-blur-sm space-y-5 animate-fade-in">
      <h3 className="text-lg font-semibold text-gray-300">Analysis Result</h3>

      {/* Score + Risk */}
      <div className="flex items-center gap-6">
        <div
          className={`w-24 h-24 rounded-full flex items-center justify-center text-2xl font-bold border-[3px] shrink-0 ${riskColor.ring} ${riskColor.bg} ${riskColor.text}`}
        >
          {score}%
        </div>
        <div>
          <p className="text-gray-400 text-sm mb-1">Credibility Score</p>
          <span
            className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${riskColor.badge}`}
          >
            {risk} Risk
          </span>
        </div>
      </div>

      {/* Explanation */}
      {explanation && (
        <div className="bg-white/[0.03] rounded-xl p-4 text-gray-300 leading-relaxed">
          {explanation}
        </div>
      )}

      {/* Warning Signs */}
      {signs.length > 0 && (
        <div>
          <h4 className="text-amber-400 font-medium mb-2">⚠ Warning Signs</h4>
          <ul className="space-y-1">
            {signs.map((sign, i) => (
              <li key={i} className="text-gray-400 text-sm pl-5 relative before:content-['⚠'] before:absolute before:left-0">
                {sign}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Extracted Text */}
      {extractedText && (
        <div className="bg-white/[0.03] rounded-lg p-3 text-sm text-gray-500">
          <span className="text-gray-400 font-medium">Extracted Text: </span>
          {extractedText}
        </div>
      )}
    </div>
  );
}

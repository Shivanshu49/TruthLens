export default function Spinner() {
  return (
    <div className="flex flex-col items-center py-8">
      <div className="flex gap-2">
        <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
        <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
        <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce" />
      </div>
      <p className="text-cyan-400 mt-3 text-sm">Analyzing with AI...</p>
    </div>
  );
}

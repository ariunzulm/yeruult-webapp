export default function ScenePlayer() {
  return (
    <article className="flex flex-col gap-4 rounded-2xl border border-gray-700 bg-gray-900 p-4">
      <div className="w-full">
        <video src="/videos/scene1.mp4"></video>
      </div>
      <div className="flex gap-3">
        <button>▶️</button>
        <button>⏸️</button>
      </div>
      <h3>Subtitles</h3>
      <h1>
        Highlight target words with clickable translation or image explanation
      </h1>
      <h1>Guess the word question form the scene</h1>
    </article>
  );
}

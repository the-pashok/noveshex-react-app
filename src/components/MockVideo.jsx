export function MockVideo({ title }) {
  return (
    <div className="mock-video" aria-label={`Прев’ю вправи ${title}`}>
      <div className="mock-video__play" aria-hidden="true">
        <span />
      </div>
    </div>
  );
}

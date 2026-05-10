export function ProgramCardGrid({ items }) {
  return (
    <div className="card-grid">
      {items.map((item) => (
        <article key={item.slug} className="card reveal">
          <h3>{item.title}</h3>
          <div className="card__price">{item.price}</div>
          <p>{item.description}</p>
          <ul className="card__list">
            <li>{item.cadence}</li>
            <li>{item.goal}</li>
            <li>{item.level}</li>
          </ul>
        </article>
      ))}
    </div>
  );
}

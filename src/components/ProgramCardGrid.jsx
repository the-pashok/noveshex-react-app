import { Link } from 'react-router-dom';

export function ProgramCardGrid({ items }) {
  return (
    <div className="card-grid">
      {items.map((item) => (
        <article key={item.slug} className="card reveal">
          <span className="card__eyebrow">Training</span>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <ul className="card__list">
            <li>{item.cadence}</li>
            <li>{item.goal}</li>
            <li>{item.level}</li>
          </ul>
          <Link to={`/programs/${item.slug}`} className="button button--secondary">
            Відкрити програму
          </Link>
        </article>
      ))}
    </div>
  );
}

export function CardGrid({ items, variant = 'default' }) {
  return (
    <div className={`card-grid card-grid--${variant}`}>
      {items.map((item) => (
        <article key={item.title ?? item.name} className={`card card--${variant} reveal`}>
          {'eyebrow' in item ? <span className="card__eyebrow">{item.eyebrow}</span> : null}
          <h3>{item.title ?? item.name}</h3>
          {'price' in item ? <div className="card__price">{item.price}</div> : null}
          <p>{item.description}</p>
          {'bullets' in item ? (
            <ul className="card__list">
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          ) : null}
          {'cta' in item ? (
            <button className={`button ${item.featured ? 'button--primary' : 'button--secondary'}`}>
              {item.cta}
            </button>
          ) : null}
        </article>
      ))}
    </div>
  );
}

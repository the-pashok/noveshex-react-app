import { Link } from 'react-router-dom';

export function CardGrid({ items, variant = 'default' }) {
  const renderAction = (item) => {
    if (!item.cta) return null;

    const className = `button ${item.featured ? 'button--primary' : 'button--secondary'}`;

    if (item.href) {
      if (item.external) {
        return (
          <a className={className} href={item.href} target="_blank" rel="noreferrer">
            {item.cta}
          </a>
        );
      }

      return (
        <Link className={className} to={item.href}>
          {item.cta}
        </Link>
      );
    }

    return <button className={className}>{item.cta}</button>;
  };

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
          {renderAction(item)}
        </article>
      ))}
    </div>
  );
}

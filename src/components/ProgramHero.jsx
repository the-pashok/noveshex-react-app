import { Link } from 'react-router-dom';
import { Container } from './Container';
import { programLinks } from '../data/programsData';

export function ProgramHero({ program }) {
  return (
    <section className="program-hero">
      <Container className="program-hero__inner">
        <div className="program-hero__copy reveal is-visible">
          <span className="hero__eyebrow">{program.eyebrow}</span>
          <h1>{program.title}</h1>
          <p>{program.description}</p>
          <div className="program-hero__actions">
            <a href="#membership" className="button button--primary">Get membership</a>
            <Link to="/programs" className="button button--secondary">Усі програми</Link>
          </div>
        </div>

        <aside className="program-hero__panel reveal reveal--delay is-visible">
          <div className="program-hero__stats">
            <div>
              <span>Частота</span>
              <strong>{program.cadence}</strong>
            </div>
            <div>
              <span>Ціль</span>
              <strong>{program.goal}</strong>
            </div>
            <div>
              <span>Рівень</span>
              <strong>{program.level}</strong>
            </div>
            <div>
              <span>Тривалість</span>
              <strong>{program.duration}</strong>
            </div>
          </div>

          <div className="program-switcher">
            {programLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`program-switcher__link ${link.to.endsWith(program.slug) ? 'program-switcher__link--active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </aside>
      </Container>
    </section>
  );
}

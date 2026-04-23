import { Link } from 'react-router-dom';
import { Container } from './Container';

export function Hero() {
  return (
    <section className="hero">
      <Container className="hero__inner">
        <div className="hero__copy reveal">
          <span className="hero__eyebrow">Noveshex</span>
          <h1>Темний, мінімалістичний досвід для нової версії платформи.</h1>
          <p>
            Переосмислений інтерфейс у premium-естетиці: великі акценти, чиста композиція,
            адаптивна структура та окремі legal-сторінки в єдиній дизайн-системі.
          </p>
          <div className="hero__actions">
            <a href="#membership" className="button button--primary">
              Get membership
            </a>
            <Link to="/privacy-policy" className="button button--secondary">
              Переглянути legal pages
            </Link>
          </div>
        </div>
        <div className="hero__panel reveal reveal--delay">
          <div className="hero-card">
            <span>Dark-first UI</span>
            <strong>Training / Nutrition / Pharma</strong>
            <p>Архітектура під React-додаток з повторним використанням компонентів і сторінок.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

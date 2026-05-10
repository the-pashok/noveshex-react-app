import { Link } from 'react-router-dom';
import { Container } from '../components/Container';

export function NotFoundPage() {
  return (
    <section className="section not-found-page">
      <Container className="not-found-page__inner reveal is-visible">
        <span className="section-heading__eyebrow">404</span>
        <h1>Сторінку не знайдено</h1>
        <p>Можливо, адреса змінилася або сторінка ще не була опублікована в цій версії сайту.</p>
        <Link className="button button--primary" to="/">
          Повернутися на головну
        </Link>
      </Container>
    </section>
  );
}

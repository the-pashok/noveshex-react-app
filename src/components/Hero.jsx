import { Link } from 'react-router-dom';
import { Container } from './Container';
import { telegramHandle, telegramUrl } from '../data/siteData';

export function Hero() {
  return (
    <section className="hero">
      <Container className="hero__inner">
        <div className="hero__copy reveal is-visible">
          <span className="hero__eyebrow">Noveshex</span>
          <h1>Програми, які купують не за красиві слова, а за результат і структуру.</h1>
          <p>
            Noveshex — це цифрові тренувальні програми, практичний підхід до харчування та онлайн ведення
            для тих, хто хоче не просто “почати”, а реально дійти до форми, дисципліни та стабільного прогресу.
          </p>
          <div className="hero__actions">
            <Link to="/programs" className="button button--primary">
              Переглянути програми
            </Link>
            <a href={telegramUrl} target="_blank" rel="noreferrer" className="button button--secondary">
              Написати в Telegram
            </a>
          </div>
          <div className="hero__meta">Старт комунікації та питання щодо доступу: {telegramHandle}</div>
        </div>

        <div className="hero__panel reveal reveal--delay is-visible">
          <div className="hero-card">
            <span>Що всередині</span>
            <strong>Training / Nutrition / Coaching</strong>
            <p>
              Готові програми Full Body, 3-Day Split і 4-Day Split, рекомендації по харчуванню,
              а також онлайн ведення з комунікацією та корекціями в Telegram.
            </p>
            <ul className="hero-card__list">
              <li>Чітка структура по днях</li>
              <li>Відео і пояснення до вправ</li>
              <li>Освітній блок по темах фармакології — без продажу речовин і без медичних призначень</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

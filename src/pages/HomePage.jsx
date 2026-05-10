import { CardGrid } from '../components/CardGrid';
import { Container } from '../components/Container';
import { Hero } from '../components/Hero';
import { ProgramCardGrid } from '../components/ProgramCardGrid';
import { SectionHeading } from '../components/SectionHeading';
import {
  coachingSteps,
  faqItems,
  offerCards,
  pricingPlans,
  telegramHandle,
  telegramUrl,
  valueCards,
} from '../data/siteData';
import { trainingPrograms } from '../data/programsData';

export function HomePage() {
  return (
    <>
      <Hero />

      <section id="offers" className="section">
        <Container>
          <SectionHeading
            title="Не черговий “фітнес-план”, а продукт, який реально можна впровадити"
            description="Ми зібрали Noveshex так, щоб користувач отримував не просто інформацію, а чіткий маршрут: тренування, харчування, підтримка та зрозумілий наступний крок."
          />
          <CardGrid items={offerCards} />
        </Container>
      </section>

      <section id="why-us" className="section section--muted">
        <Container>
          <SectionHeading
            title="Логіка сайту і продукту підпорядкована одній меті — щоб ти реально дійшов до результату"
            description="Мінімум шуму, максимум зрозумілих рішень. Саме тому тут спочатку сенс і структура, а вже потім декоративність."
          />
          <CardGrid items={valueCards} variant="feature" />
        </Container>
      </section>

      <section id="programs" className="section">
        <Container>
          <SectionHeading
            title="Три формати тренувань під різний ритм життя"
            description="Обирай той варіант, який ти зможеш виконувати стабільно. Саме стабільність, а не ідеальний понеділок, дає результат."
          />
          <ProgramCardGrid items={Object.values(trainingPrograms)} />
        </Container>
      </section>

      <section id="coaching" className="section section--muted">
        <Container>
          <SectionHeading
            title="Для тих, кому потрібен не файл, а зворотний зв’язок і контроль по ходу"
            description="Якщо ти хочеш менше сумнівів, швидший старт і регулярні корекції, формат ведення дає зовсім інший рівень включеності."
          />
          <CardGrid items={coachingSteps} variant="feature" />
          <div className="cta-band reveal is-visible">
            <div>
              <span className="section-heading__eyebrow">Telegram</span>
              <h3>Хочеш підібрати формат під себе?</h3>
              <p>
                Напиши в Telegram, коротко опиши ціль, досвід і графік — і тобі скажуть, що краще підійде: готова програма чи ведення.
              </p>
            </div>
            <a href={telegramUrl} target="_blank" rel="noreferrer" className="button button--primary">
              Написати {telegramHandle}
            </a>
          </div>
        </Container>
      </section>

      <section id="pricing" className="section">
        <Container>
          <SectionHeading
            title="Прості пакети без зайвих рівнів і плутанини"
            description="Стартуй з того, що відповідає твоїй цілі зараз. Потім масштабуватися завжди легше, ніж починати з хаосу."
            align="center"
          />
          <CardGrid items={pricingPlans} variant="pricing" />
        </Container>
      </section>

      <section id="faq" className="section section--muted">
        <Container>
          <SectionHeading
            title="Питання, які користувач ставить перед покупкою"
            description="Цей блок закриває основні заперечення і допомагає людині швидше дійти до дії замість того, щоб відкладати рішення."
          />
          <CardGrid items={faqItems} variant="feature" />
        </Container>
      </section>
    </>
  );
}

import { CardGrid } from '../components/CardGrid';
import { Container } from '../components/Container';
import { Hero } from '../components/Hero';
import { SectionHeading } from '../components/SectionHeading';
import { courseCards, featureCards, membershipPlans } from '../data/siteData';

export function HomePage() {
  return (
    <>
      <Hero />

      <section id="courses" className="section">
        <Container>
          <SectionHeading
            eyebrow="Courses"
            title="Три ключові напрями для Noveshex"
            description="Чітка продуктова структура для курсів, яка виглядає дорожче, читається легше й масштабується без хаосу."
          />
          <CardGrid items={courseCards} />
        </Container>
      </section>

      <section id="features" className="section section--muted">
        <Container>
          <SectionHeading
            eyebrow="System"
            title="Сайт, побудований як система, а не набір випадкових блоків"
            description="Спільні компоненти, передбачувана типографіка, єдиний візуальний ритм і чиста адаптивна логіка."
          />
          <CardGrid items={featureCards} variant="feature" />
        </Container>
      </section>

      <section id="membership" className="section">
        <Container>
          <SectionHeading
            eyebrow="Membership"
            title="Плани доступу"
            description="CTA під членство винесені в окремий блок, щоб сильніше підштовхувати до цільової дії."
            align="center"
          />
          <CardGrid items={membershipPlans} variant="pricing" />
        </Container>
      </section>
    </>
  );
}

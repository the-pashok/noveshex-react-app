import { CardGrid } from '../components/CardGrid';
import { Container } from '../components/Container';
import { Hero } from '../components/Hero';
import { ProgramCardGrid } from '../components/ProgramCardGrid';
import { SectionHeading } from '../components/SectionHeading';
import { courseCards, featureCards, membershipPlans } from '../data/siteData';
import { trainingPrograms } from '../data/programsData';

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

      <section id="training-programs" className="section section--muted">
        <Container>
          <SectionHeading
            eyebrow="Training"
            title="Готові програми тренувань"
            description="Окремі сторінки для 3-Day Split, 4-Day Split та Full Body в тому ж візуальному стилі."
          />
          <ProgramCardGrid items={Object.values(trainingPrograms)} />
        </Container>
      </section>

      <section id="features" className="section">
        <Container>
          <SectionHeading
            eyebrow="System"
            title="Сайт, побудований як система, а не набір випадкових блоків"
            description="Спільні компоненти, передбачувана типографіка, єдиний візуальний ритм і чиста адаптивна логіка."
          />
          <CardGrid items={featureCards} variant="feature" />
        </Container>
      </section>

      <section id="membership" className="section section--muted">
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

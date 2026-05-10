import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '../components/Container';
import { ProgramDaySection } from '../components/ProgramDaySection';
import { ProgramHero } from '../components/ProgramHero';
import { SectionHeading } from '../components/SectionHeading';
import { trainingPrograms } from '../data/programsData';
import { pricingPlans } from '../data/siteData';
import { CardGrid } from '../components/CardGrid';
import { NotFoundPage } from './NotFoundPage';

export function TrainingProgramPage() {
  const { slug } = useParams();
  const program = useMemo(() => trainingPrograms[slug], [slug]);

  if (!program) {
    return <NotFoundPage />;
  }

  return (
    <>
      <ProgramHero program={program} />

      <section className="section section--compact">
        <Container>
          <SectionHeading
            eyebrow="Workout Plan"
            title="Що всередині програми"
            description="Кожен день оформлений як окремий блок: логіка вправ, mock video-прев’ю та ключові параметри виконання. Це виглядає чисто, читається швидко і продає сам продукт прямо на сторінці."
          />
          <div className="program-days">
            {program.days.map((day, index) => (
              <ProgramDaySection key={`${program.slug}-${day.day}`} day={day} defaultOpen={index === 0} />
            ))}
          </div>
        </Container>
      </section>

      <section id="pricing" className="section section--muted">
        <Container>
          <SectionHeading
            eyebrow="Доступ"
            title="Хочеш забрати програму зараз?"
            description="Можна стартувати з окремої програми або одразу перейти в формат із супроводом, якщо потрібен контроль по ходу."
            align="center"
          />
          <CardGrid items={pricingPlans} variant="pricing" />
        </Container>
      </section>
    </>
  );
}

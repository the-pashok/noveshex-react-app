import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '../components/Container';
import { ProgramDaySection } from '../components/ProgramDaySection';
import { ProgramHero } from '../components/ProgramHero';
import { SectionHeading } from '../components/SectionHeading';
import { trainingPrograms } from '../data/programsData';
import { membershipPlans } from '../data/siteData';
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
            title="Структура програми"
            description="Кожен день оформлено як окремий блок у стилі premium dark UI. Картки вправ повторюють логіку твого прикладу: прев’ю, назва та ключові параметри."
          />
          <div className="program-days">
            {program.days.map((day, index) => (
              <ProgramDaySection key={`${program.slug}-${day.day}`} day={day} defaultOpen={index === 0} />
            ))}
          </div>
        </Container>
      </section>

      <section id="membership" className="section section--muted">
        <Container>
          <SectionHeading
            eyebrow="Membership"
            title="Хочеш доступ до програми?"
            description="Після вибору плану можна підключити оплату або логіку членства у Wix / React інтеграції."
            align="center"
          />
          <CardGrid items={membershipPlans} variant="pricing" />
        </Container>
      </section>
    </>
  );
}

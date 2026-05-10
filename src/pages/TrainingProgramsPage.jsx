import { Container } from '../components/Container';
import { ProgramCardGrid } from '../components/ProgramCardGrid';
import { SectionHeading } from '../components/SectionHeading';
import { trainingPrograms } from '../data/programsData';

export function TrainingProgramsPage() {
  const items = Object.values(trainingPrograms);

  return (
    <section className="section">
      <Container>
        <SectionHeading
          eyebrow="Training"
          title="Програми тренувань Noveshex"
          description="Три окремі продукти в одному стилі: Full Body для впевненого старту, 3-Day Split для стабільного росту та 4-Day Split для більшої деталізації й обсягу."
        />
        <ProgramCardGrid items={items} />
      </Container>
    </section>
  );
}

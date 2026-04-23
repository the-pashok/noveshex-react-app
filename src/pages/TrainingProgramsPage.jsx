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
          title="Програми тренувань"
          description="Три окремі програми в одному стилі: 3-Day Split, 4-Day Split та Full Body. У кожній сторінці — дні тренувань, вправи та mock video-прев’ю."
        />
        <ProgramCardGrid items={items} />
      </Container>
    </section>
  );
}

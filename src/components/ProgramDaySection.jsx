import { ExerciseCard } from './ExerciseCard';

export function ProgramDaySection({ day, defaultOpen = false }) {
  return (
    <details className="program-day reveal" open={defaultOpen}>
      <summary className="program-day__summary">
        <div>
          <h2>{day.day}</h2>
          <p>{day.note}</p>
        </div>
        <div className="program-day__meta">
          <span className="program-day__focus">{day.focus}</span>
          <span className="program-day__icon" aria-hidden="true">⌃</span>
        </div>
      </summary>

      <div className="program-day__content">
        <div className="exercise-grid">
          {day.exercises.map((exercise) => (
            <ExerciseCard key={`${day.day}-${exercise.title}`} exercise={exercise} />
          ))}
        </div>
      </div>
    </details>
  );
}

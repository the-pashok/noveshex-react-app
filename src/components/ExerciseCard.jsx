import { MockVideo } from './MockVideo';

export function ExerciseCard({ exercise }) {
  return (
    <article className="exercise-card">
      <MockVideo title={exercise.title} />
      <div className="exercise-card__body">
        <h3>{exercise.title}</h3>
        <div className="exercise-card__chips">
          <span>{exercise.sets}</span>
          <span>{exercise.reps}</span>
          <span>{exercise.intensity}</span>
          <span>{exercise.rest}</span>
        </div>
      </div>
    </article>
  );
}

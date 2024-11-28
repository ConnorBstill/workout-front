export interface Exercise {
  id?: number;
  workoutId?: number;
  name: string;
  weight: string;
  repsPerSet: number;
  sets: number;
  restTime: number;
  restTimeUnit: 's' | 'm';
  dateEntered?: string;
}

export interface SetWorkoutExercisesPayload {
  exerciseId: number;
  sortOrder: number;
  items: {
    weight: number;
    reps: number;
    restTime: number;
  }[];
}

export interface MuscleGroup {
  id: number;
  name: string;
  label: string;
}

export interface Equipment {
  id: number;
  name: string;
  label: string;
}

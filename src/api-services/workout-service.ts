import { get } from './http-service';

import { Response } from '../types/api.type';
import { Workout } from '../types/workout.types';
import { Exercise } from '../types/exercise.types';

// interface GetWorkoutResponse extends Omit<Response, 'data'> {
//   data: Workout[];
// }

const API_URL = import.meta.env.VITE_API_URL;

export const getWorkouts = (): Promise<Response<Workout[]>> => {
  return get(`${API_URL}/workout`);
};

export const getWorkoutById = (id: number): Promise<Response<Workout>> => {
  return get(`${API_URL}/workout/${id}`);
};

export const getWorkoutExercises = (id: number): Promise<Response<Exercise[]>> => {
  console.log('getWorkoutExercises');
  return get(`${API_URL}/workout/${id}/exercise`);
};

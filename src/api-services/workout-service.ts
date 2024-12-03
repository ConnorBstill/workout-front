import { get, post } from './http-service';

import { Response } from '../common/types/api.type';
import { Workout } from '../common/types/workout.types';
import { Exercise } from '../common/types/exercise.types';

const API_URL = import.meta.env.VITE_API_URL;

export const getWorkouts = (): Promise<Response<Workout[]>> => {
  return get(`${API_URL}/workout`);
};

export const getWorkoutById = (id: number): Promise<Response<Workout>> => {
  return get(`${API_URL}/workout/${id}`);
};

export const getWorkoutExercises = (id: number): Promise<Response<Exercise[]>> => {
  return get(`${API_URL}/workout/${id}/exercise`);
};

export const setWorkoutExercises = (workoutId: number, exercises: Exercise[]): Promise<Response<any>> => {
  return post(`${API_URL}/workout/${workoutId}/exercise`, exercises);
};

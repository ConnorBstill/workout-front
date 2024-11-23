import { get } from './http-service';

import { Response } from '../types/api.type';
import { Workout } from '../types/workout.types';

interface GetWorkoutResponse extends Omit<Response, 'data'> {
  data: Workout[];
}

const API_URL = import.meta.env.VITE_API_URL;

export const getWorkouts = (): Promise<GetWorkoutResponse> => {
  return get(`${API_URL}/workout`);
};

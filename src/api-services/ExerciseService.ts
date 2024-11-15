import { get } from './HttpService';

const API_URL = import.meta.env.VITE_API_URL;

export const searchExercises = (equipmentId: number, muscleGroupId: number): Promise<any> => {
  return get(`${API_URL}/exercise?equipmentId=${equipmentId}&muscleGroupId=${muscleGroupId}`);
};

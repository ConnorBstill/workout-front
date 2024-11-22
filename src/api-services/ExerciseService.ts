import { get } from './HttpService';

import { Response } from '../types/api.type';

const API_URL = import.meta.env.VITE_API_URL;

export const searchExercises = (equipmentId: string, muscleGroupId: string): Promise<Response> => {
  return get(`${API_URL}/exercise?equipmentId=${equipmentId}&muscleGroupId=${muscleGroupId}`);
};

export const getMuscleGroups = (): Promise<Response> => {
  return get(`${API_URL}/exercise/muscle-group`);
};

export const getEquipment = (): Promise<Response> => {
  return get(`${API_URL}/exercise/equipment`);
};

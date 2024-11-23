import { get, post } from './http-service';

import { User } from '../types/user.types';
import { Response } from '../types/api.type';

const API_URL = import.meta.env.VITE_API_URL;

export const registerUser = async (user: User): Promise<Response> => {
  try {
    return post(`${API_URL}/auth/register`, user);
  } catch (err: any) {
    return { data: [], err };
  }
};

export const authenticateUser = async (user: User): Promise<Response> => {
  return post(`${API_URL}/auth/login`, user);
};

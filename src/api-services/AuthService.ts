import { get, post } from './HttpService';

import { User } from '../types/user.types';
import { Response } from '../types/api.type';

const API_URL = import.meta.env.VITE_API_URL;

export const registerUser = async (user: User): Promise<Response> => {
  try {
    return post(`${API_URL}/auth/register`, user);
    // return res.json();
  } catch (err: any) {
    return { data: [], error: err };
  }
};

export const logInUser = async (user: User): Promise<Response> => {
  // const res = await fetch(`${API_URL}/authenticate`);
  return post(`${API_URL}/auth/login`, user);
  // return res.json();
};

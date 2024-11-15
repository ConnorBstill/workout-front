import { get, post } from './HttpService';

import { Response, User } from '../types/user.types';

const API_URL = import.meta.env.VITE_API_URL;

export const registerUser = async (user: User): Promise<Response> => {
  try {
    return post(`${API_URL}/auth/register`, user);
    // return res.json();
  } catch (err: any) {
    return { data: [], error: err };
  }
};

export const logInUser = async (user: User): Promise<any> => {
  // const res = await fetch(`${API_URL}/authenticate`);
  return post(`${API_URL}/auth/login`, user);
  // return res.json();
};

import { get, post } from './http-service';

import { User, AuthResponse } from '../common/types/user.types';
import { Response } from '../common/types/api.type';

const API_URL = import.meta.env.VITE_API_URL;

export const registerUser = async (user: User): Promise<Response<AuthResponse>> => {
  return post(`${API_URL}/auth/register`, user);
};

export const authenticateUser = async (user: User): Promise<Response<AuthResponse>> => {
  return post(`${API_URL}/auth/login`, user);
};

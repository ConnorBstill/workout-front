export interface User {
  email: string;
  password?: string;
}

export interface AuthResponse {
  jwt: string;
  refreshToken: string;
}

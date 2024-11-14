export interface Response { 
  data: any, 
  error: boolean
}

export interface User {
  email: string;
  password?: string;
}

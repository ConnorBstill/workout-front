export interface Response { 
  data: any, 
  error: boolean
}

export interface User {
  username: string;
  password?: string;
}

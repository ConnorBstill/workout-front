export interface Response<Type> {
  data: Type;
  err: boolean;
  msg: string;
}

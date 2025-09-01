export interface APIResponse<T> {
  httpCode: number;
  errorMessage: string;
  data: T;
}

export interface User {
  url: string;
  avatar: string;
  fullName: string;
}

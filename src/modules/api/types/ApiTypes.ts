import { AxiosRequestConfig } from 'axios';

export interface IConfig {
  url: string;
  data?: Object;
  config?: AxiosRequestConfig;
}

// export interface IResponseCommon<T> {
//   success: boolean;
//   errors: [] | null;
//   message: string | null;
//   data: T;
// }

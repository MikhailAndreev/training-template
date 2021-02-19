import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { appConfig } from '../appConfig';
import NotificationService from './NotificationService';

const api = axios.create();

api.defaults.baseURL = process.env.NODE_ENV === 'production' ? appConfig.apiUrl.prod : appConfig.apiUrl.dev;

if (process.env.NODE_ENV === 'production' && !appConfig.apiUrl.prod) {
  console.error('env.REACT_APP_API_URL - api url is not found!');
}

api.interceptors.request.use(
  async config => {
    const newConfig: AxiosRequestConfig = {
      ...config,
      headers: {
        'Content-Type': 'application/json',
        'App-Platform': 'web',
        ...config.headers,
      },
    };
    return newConfig;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    // global showing error messages
    if (error.response?.data) {
      NotificationService.showError(error.response.data?.message || 'Неизвестная ошибка');
    }

    return Promise.reject(error);
  },
);

interface IConfig {
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

class ApiService {
  get = <T extends {}>(config: IConfig) => {
    return api.get<T>(config.url);
  };

  post = <T extends {}>(config: IConfig) => {
    return api.post<T>(config.url, config.data);
  };

  setAccessToken = (token: string) => {
    axios.defaults.headers['Access-Token'] = token;
  };

  clearAccessToken = () => {
    axios.defaults.headers['Access-Token'] = null;
  };
}

const API = new ApiService();
export default API;
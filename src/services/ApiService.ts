import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import NotificationService from './NotificationService';

const api = axios.create();

api.defaults.baseURL = process.env.REACT_APP_API_URL;

console.log('process.env.REACT_APP_API_URL', process.env.REACT_APP_API_URL);

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
    // Show global error messages
    if (error.response?.data) {
      NotificationService.showError(error.response.data?.message || 'Неизвестная ошибка');
    }

    return Promise.reject(error);
  },
);

interface IConfig {
  url: string;
  data?: Object;
}

class ApiService {
  get = (config: IConfig) => {
    return api.get(config.url);
  };

  post = (config: IConfig) => {
    return api.post(config.url, config.data);
  };
}

const API = new ApiService();
export default API;

// class API<U extends string, C extends AxiosRequestConfig> {
//   get = <T extends {}>(apiUrl: U, config?: C): Promise<AxiosResponse<IRequestResponse<T>>> => {
//     return axios.get<IRequestResponse<T>>(apiUrl, config);
//   };
//   post = <T extends {}, D extends {}>(apiUrl: U, data: D, config?: C): Promise<AxiosResponse<IRequestResponse<T>>> => {
//     return axios.post<IRequestResponse<T>>(apiUrl, data, config);
//   };
//   put = <T extends {}, D extends {}>(apiUrl: U, data: D): Promise<AxiosResponse<IRequestResponse<T>>> => {
//     return axios.put<IRequestResponse<T>>(apiUrl, data);
//   };
//   delete = <T extends {}>(apiUrl: U): Promise<AxiosResponse<IRequestResponse<T>>> => {
//     return axios.delete<IRequestResponse<T>>(apiUrl);
//   };

//   setToken = (token: string) => {
//     axios.defaults.headers['Access-Token'] = token;
//   };
//   clearToken = () => {
//     axios.defaults.headers['Access-Token'] = null;
//   };
// }

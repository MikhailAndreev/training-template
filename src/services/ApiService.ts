import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { appConfig } from '../appConfig';
import NotificationService from './NotificationService';

const api = axios.create();

api.defaults.baseURL = process.env.NODE_ENV === 'production' ? appConfig.apiUrl.prod : appConfig.apiUrl.dev;

if (!appConfig.apiUrl.prod) {
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

// export interface IResponseCommon {
//   success: boolean;
//   errors: [] | null;
//   message: string | null;
//   data: any;
// }

class ApiService {
  get = (config: IConfig) => {
    return api.get(config.url);
  };

  post = (config: IConfig) => {
    return api.post(config.url, config.data);
  };

  setAccessToken = (token: string) => {
    axios.defaults.headers['Access-Token'] = token;
  };

  clearAccessToken = () => {
    axios.defaults.headers['Access-Token'] = null;
  };
}

// class ApiService {
//   get = (config: IConfig) => {
//     return api.get<IResponseCommon>(config.url);
//   };

//   post = (config: IConfig) => {
//     return api.post<IResponseCommon>(config.url, config.data);
//   };

//   setAccessToken = (token: string) => {
//     axios.defaults.headers['Access-Token'] = token;
//   };

//   clearAccessToken = () => {
//     axios.defaults.headers['Access-Token'] = null;
//   };
// }

// class ApiService {
//   get = <T extends {}>({ url, config }: IConfig<null>): Promise<AxiosResponse<IRequestResponse<T>>> => {
//     return api.get<IRequestResponse<T>>(url, config);
//   };

//   post = <T extends {}, D extends {}>({ url, data, config }: IConfig<D>): Promise<AxiosResponse<IRequestResponse<T>>> => {
//     return api.post<IRequestResponse<T>>(url, data, config);
//   };

//   put = <T extends {}, D extends {}>({ url, data }: IConfig<D>): Promise<AxiosResponse<IRequestResponse<T>>> => {
//     return axios.put<IRequestResponse<T>>(url, data);
//   };

//   delete = <T extends {}>({ url }: IConfig<null>): Promise<AxiosResponse<IRequestResponse<T>>> => {
//     return axios.delete<IRequestResponse<T>>(url);
//   };

//   setAccessToken = (token: string) => {
//     axios.defaults.headers['Access-Token'] = token;
//   };

//   clearAccessToken = () => {
//     axios.defaults.headers['Access-Token'] = null;
//   };
// }

const API = new ApiService();
export default API;

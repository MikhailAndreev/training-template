import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { appConfig } from '../../appConfig';
import Notification from '../../helpers/Notification';

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
        'App-Platform': 'web', // required
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
      Notification.showError(error.response.data?.message || 'Неизвестная ошибка');
    }

    return Promise.reject(error);
  },
);

export default api;

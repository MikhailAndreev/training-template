import axios from 'axios';
import { IRequestResponse } from '../types/CommonTypes';
import { showNotification } from '../utils/showNotification';
import { _tokenStorageKey } from '../stores/AuthStore';

// REACT_APP_API_URL - env var for production api path
export const BASE_URL = process.env.REACT_APP_API_URL ? `${process.env.REACT_APP_API_URL}/api` : 'api_path';

// Axios settings
axios.interceptors.request.use(
    async config => {
        return {
            ...config,
            baseURL: BASE_URL,
            headers: {
                'Content-Type': 'application/json',
                'App-Platform': 'web', // requred
                ...config.headers,
            },
        };
    },
    error => {
        return Promise.reject(error);
    },
);

axios.interceptors.response.use(
    async response => {
        return response;
    },
    // Error handlers
    async error => {
        // Show global error messages
        if (error.response?.data) {
            showNotification('danger', error.response.data?.message || 'Неизвестная ошибка');
        }

        if (error.message === 'Network Error') {
            showNotification('danger', 'Проверьте соединение');

            return Promise.reject(error);
        }

        // Error code handlers
        if (error.response?.status) {
            switch (error.response?.status) {
                case 401:
                    console.log('Ошибка - 401');
                    if (axios.defaults.headers['Access-Token']) {
                        api.clearToken();
                        localStorage.removeItem(_tokenStorageKey);
                        document.location.reload();
                    }
                    throw error;

                case 400:
                    console.log('Ошибка - 400');
                    throw error;

                default:
                    console.log('Ошибка на сервере');
                    throw error;
            }
        }
    },
);

class API {
    get = (apiUrl: string) => axios.get<IRequestResponse>(apiUrl);
    post = (apiUrl: string, data: any) => axios.post<IRequestResponse>(apiUrl, data);
    put = (apiUrl: string, data: any) => axios.put<IRequestResponse>(apiUrl, data);
    delete = (apiUrl: string) => axios.delete<IRequestResponse>(apiUrl);

    setToken = (token: string) => {
        axios.defaults.headers['Access-Token'] = token;
    };
    clearToken = () => {
        axios.defaults.headers['Access-Token'] = null;
    };
}

export const api = new API();

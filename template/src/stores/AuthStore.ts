import { observable, action, makeAutoObservable, runInAction } from 'mobx';
import { api } from '../api';
import { ILoginResponse, ILoginValues } from '../types/AuthTypes';
import { showNotification } from '../utils/showNotification';

export const _tokenStorageKey = '_projectNameAccessToken';

export class AuthStore {
    @observable loading = false;

    @observable errorMessages: any = {};
    @observable confirmEmailMessage = false;

    @observable token = null;
    @observable isAuth = false;

    @observable completeCheckAuth = false;

    constructor() {
        makeAutoObservable(this);
    }

    @action
    login = (values: ILoginValues, history: any) => {
        this.loading = true;

        api.post<ILoginResponse, ILoginValues>('/auth/login', values)
            .then(({ data }) => {
                if (data.success) {
                    const token = data.data.accessToken;

                    // Set token
                    api.setToken(token);
                    localStorage.setItem(_tokenStorageKey, JSON.stringify(token));

                    runInAction(() => {
                        this.isAuth = true;
                    });

                    // Redirect
                    history.push('/');
                }
            })
            .catch(error => {
                if (error.response?.data?.errors) {
                    runInAction(() => {
                        this.errorMessages = error.response.data.errors;
                    });
                }
            })
            .finally(() => {
                runInAction(() => {
                    this.loading = false;
                });
            });
    };

    @action
    logout = (history: any) => {
        this.loading = true;

        api.post('/auth/logout', {})
            .then(response => {
                if (response.data.success) {
                    api.clearToken();
                    localStorage.removeItem(_tokenStorageKey);
                    runInAction(() => {
                        this.isAuth = false;
                    });

                    // Redirect
                    history.push('/');

                    showNotification('success', response.data?.message || '');
                }
            })
            .finally(() => {
                runInAction(() => {
                    this.loading = false;
                });
            });
    };

    @action
    checkAuth = () => {
        const token = JSON.parse(localStorage.getItem(_tokenStorageKey) || 'null');

        if (token) {
            api.setToken(token);
            this.isAuth = true;

            return true;
        }

        this.isAuth = false;
        this.completeCheckAuth = true;

        return false;
    };

    @action
    setCompleteCheckAuth = (value: boolean) => {
        this.completeCheckAuth = value;
    };

    @action
    resetErrors = () => {
        this.errorMessages = {};
    };
}

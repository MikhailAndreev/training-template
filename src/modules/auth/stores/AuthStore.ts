import { makeAutoObservable, runInAction } from 'mobx';

import API from '../../../services/ApiService';
import AuthAPI from '../AuthAPI';
import { TokenStore } from './TokenStore';
import TokenStorageService from '../../../services/TokenStorageService';
import { ILoginValues, IRegisterValues } from '../Auth';
import NotificationService from '../../../services/NotificationService';

export class AuthStore {
  tokenStore?: TokenStore;
  authAPI = new AuthAPI();

  loading = false;
  isAuth = false;
  completeCheckAuth = false;

  token = null;
  errorMessages: any = {};

  constructor() {
    makeAutoObservable(this);
  }

  register = (values: IRegisterValues) => {
    this.setLoading(true);

    this.authAPI
      .register(values)
      .then(({ data }) => {
        if (data?.success) {
          if (!this.tokenStore) {
            throw new Error('Not set tokenStore');
          }
          const token = data.data.accessToken;

          this.tokenStore.setToken(token);
          this.setIsAuth(true);

          // Redirect
          // history.push('/');
        }
      })
      .catch(error => {
        if (error.response?.data?.errors) {
          runInAction(() => {
            this.errorMessages = error.response.data.errors;
          });
        }
      })
      .finally(() => this.setLoading(false));
  };

  login = (values: ILoginValues) => {
    this.setLoading(true);

    this.authAPI
      .login(values)
      .then(({ data }) => {
        if (data?.success) {
          if (!this.tokenStore) {
            throw new Error('Not set tokenStore');
          }
          const token = data.data.accessToken;

          this.tokenStore.setToken(token);
          this.setIsAuth(true);

          // Redirect
          // history.push('/');
        }
      })
      .catch(error => {
        if (error.response?.data?.errors) {
          runInAction(() => {
            this.errorMessages = error.response.data.errors;
          });
        }
      })
      .finally(() => this.setLoading(false));
  };

  logout = () => {
    this.setLoading(true);

    this.authAPI
      .logout()
      .then(({ data }) => {
        if (data?.success) {
          API.clearAccessToken();
          TokenStorageService.deleteToken();
          this.setIsAuth(false);

          // Redirect
          // history.push('/');

          if (data?.message) {
            NotificationService.showNotif({ type: 'success', message: data.message });
          }
        }
      })
      .finally(() => this.setLoading(false));
  };

  checkAuth = () => {
    const token = TokenStorageService.getToken();

    if (token) {
      API.setAccessToken(token);
      this.setIsAuth(true);

      return true;
    }

    this.setIsAuth(false);
    this.setCompleteCheckAuth(true);

    return false;
  };

  setIsAuth = (value: boolean) => {
    this.isAuth = value;
  };

  setLoading = (value: boolean) => {
    this.loading = value;
  };

  setCompleteCheckAuth = (value: boolean) => {
    this.completeCheckAuth = value;
  };

  resetErrors = () => {
    this.errorMessages = {};
  };
}

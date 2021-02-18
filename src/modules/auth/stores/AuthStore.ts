import { makeAutoObservable, runInAction } from 'mobx';

import API from '../../../services/ApiService';
import AuthService from '../AuthService';
import TokenStorageService from '../../../services/TokenStorageService';
import { ILoginValues, IRegisterValues } from '../Auth';

export class AuthStore {
  authService = new AuthService();

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

    this.authService
      .register(values)
      .then(({ data }) => {
        if (data?.success) {
          this.setIsAuth(true);
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

    this.authService
      .login(values)
      .then(({ data }) => {
        if (data?.success) {
          this.setIsAuth(true);
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

    this.authService
      .logout()
      .then(({ data }) => {
        if (data?.success) {
          this.setIsAuth(false);
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

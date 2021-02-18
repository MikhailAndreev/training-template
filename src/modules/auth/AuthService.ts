import AuthAPI from './AuthAPI';
import { IRegisterValues, ILoginValues } from './Auth';
import { TokenStore } from './stores/TokenStore';
import API from '../../services/ApiService';
import TokenStorageService from '../../services/TokenStorageService';
import NotificationService from '../../services/NotificationService';

export default class AuthService {
  authAPI: AuthAPI;
  tokenStore: TokenStore;

  constructor() {
    this.authAPI = new AuthAPI();
    this.tokenStore = new TokenStore();
  }

  register = async (values: IRegisterValues) => {
    const res = await this.authAPI.register(values);

    if (res.data?.success) {
      const token = res.data.data.accessToken;

      if (token) {
        this.tokenStore.setToken(token);

        // Redirect
        // history.push('/');
      }
    }

    return res;
  };

  login = async (values: ILoginValues) => {
    const res = await this.authAPI.login(values);

    if (res.data?.success) {
      const token = res.data.data.accessToken;

      if (token) {
        this.tokenStore.setToken(token);

        // Redirect
        // history.push('/');
      }
    }

    return res;
  };

  logout = async () => {
    const res = await this.authAPI.logout();

    if (res.data?.success) {
      API.clearAccessToken();
      TokenStorageService.deleteToken();

      // Redirect
      // history.push('/');

      if (res.data?.message) {
        NotificationService.showNotif({ type: 'success', message: res.data.message });
      }
    }

    return res;
  };
}

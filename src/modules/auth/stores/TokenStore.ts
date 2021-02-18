import { makeAutoObservable } from 'mobx';
import API from '../../../services/ApiService';
import TokenStorageService from '../../../services/TokenStorageService';

export class TokenStore {
  accessToken = '';

  constructor() {
    makeAutoObservable(this);
  }

  get isAuth() {
    return !!this.accessToken;
  }

  setToken = (token: string) => {
    TokenStorageService.saveToken(token);
    API.setAccessToken(token);
    this.accessToken = token;
  };

  deleteToken = () => {
    this.accessToken = '';
    return TokenStorageService.deleteToken();
  };

  sync = async () => {
    const storageToken = await TokenStorageService.getToken();
    this.setToken(storageToken);
  };

  clean = () => {
    return this.deleteToken();
  };
}

import { appConfig } from '../../../appConfig';

class TokenStorageServiceC {
  saveToken = (token: string) => {
    localStorage.setItem(appConfig.tokenStorageKey, JSON.stringify(token));
  };

  getToken = () => {
    return JSON.parse(localStorage.getItem(appConfig.tokenStorageKey) || 'null');
  };

  deleteToken = () => {
    localStorage.removeItem(appConfig.tokenStorageKey);
  };
}

const TokenStorageService = new TokenStorageServiceC();
export default TokenStorageService;

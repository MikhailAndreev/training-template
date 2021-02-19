import axios from 'axios';
import api from '../api';
import { IConfig } from '../types/ApiTypes';

class ApiService {
  get = <T extends {}>(config: IConfig) => {
    return api.get<T>(config.url);
  };

  post = <T extends {}>(config: IConfig) => {
    return api.post<T>(config.url, config.data);
  };

  setAccessToken = (token: string) => {
    axios.defaults.headers['Access-Token'] = token;
  };

  clearAccessToken = () => {
    axios.defaults.headers['Access-Token'] = null;
  };
}

const API = new ApiService();
export default API;

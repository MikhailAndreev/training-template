import { api, IConfig } from '../ApiAdapter';

export default abstract class AbstractApiRepository {
  get = <T extends {}>(config: IConfig) => {
    return api.get<T>(config.url);
  };

  post = <T extends {}>(config: IConfig) => {
    return api.post<T>(config.url, config.data);
  };

  put = <T extends {}>(config: IConfig) => {
    return api.put<T>(config.url, config.data);
  };

  delete = <T extends {}>(config: IConfig) => {
    return api.delete<T>(config.url);
  };
}

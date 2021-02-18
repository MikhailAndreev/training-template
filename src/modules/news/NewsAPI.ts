import API from '../../services/ApiService';

export default class NewsAPI {
  getAll = () => {
    return API.get({ url: `/posts` });
  };

  get = (id: number) => {
    return API.get({ url: `/posts/${id}` });
  };
}

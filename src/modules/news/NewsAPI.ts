import API from '../../services/ApiService';
import { NewsItem } from './models/News';

export default class NewsAPI {
  getAll = () => {
    return API.get<NewsItem[]>({ url: `/posts` });
  };

  get = (id: number) => {
    return API.get<NewsItem>({ url: `/posts/${id}` });
  };
}

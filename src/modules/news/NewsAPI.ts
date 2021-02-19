import API from '../api/service/ApiService';
import { NewsItem } from './News';

export default class NewsAPI {
  getAll = () => {
    return API.get<NewsItem[]>({ url: `/posts` });
  };

  get = (id: number) => {
    return API.get<NewsItem>({ url: `/posts/${id}` });
  };
}

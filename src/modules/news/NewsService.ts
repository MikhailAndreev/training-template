import { NewsItem } from './News';
import NewsAPI from './NewsAPI';
import { NewsFactory } from './NewsFactory';

export default class NewsService {
  newsAPI: NewsAPI;
  newsFactory: NewsFactory;

  constructor() {
    this.newsAPI = new NewsAPI();
    this.newsFactory = new NewsFactory();
  }

  getAll = async (): Promise<NewsItem[]> => {
    const { data } = await this.newsAPI.getAll();
    return this.newsFactory.createList(data).slice(0, 12);
  };

  get = async (id: number): Promise<NewsItem> => {
    const { data } = await this.newsAPI.get(id);
    return this.newsFactory.create(data);
  };
}

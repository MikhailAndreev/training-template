import NewsApiRepository from './NewsApiRepository';
import { NewsFactory } from './NewsFactory';
import { News } from './models/News';

export default class NewsService {
  newsAPI: NewsApiRepository;
  newsFactory: NewsFactory;

  constructor() {
    this.newsAPI = new NewsApiRepository();
    this.newsFactory = new NewsFactory();
  }

  getAll = async (): Promise<News[]> => {
    const { data } = await this.newsAPI.getAll();
    return this.newsFactory.createList(data).slice(0, 12); // cut list for demo
  };

  get = async (id: number): Promise<News> => {
    const { data } = await this.newsAPI.get(id);
    return this.newsFactory.create(data);
  };
}

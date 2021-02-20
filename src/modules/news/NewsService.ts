import NewsApiRepository from './repositories/NewsApiRepository';
import { NewsFactory } from './NewsFactory';
import { News } from './models/News';
import NewsLocalRepository from './repositories/NewsLocalRepository';

export default class NewsService {
  newsApi: NewsApiRepository;
  newsLocal: NewsLocalRepository;
  newsFactory: NewsFactory;

  constructor() {
    this.newsApi = new NewsApiRepository();
    this.newsLocal = new NewsLocalRepository();
    this.newsFactory = new NewsFactory();
  }

  getAll = async (): Promise<News[]> => {
    const { data } = await this.newsApi.getAll();
    return this.newsFactory.createList<News>(News, data).slice(0, 12); // cut list for demo
  };

  getOne = async (id: number): Promise<News> => {
    const { data } = await this.newsApi.getOne(id);
    return this.newsFactory.create<News>(News, data);
  };
}

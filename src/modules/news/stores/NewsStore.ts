import { makeAutoObservable } from 'mobx';

import { NewsItem } from '../models/News';
import { Nullable } from '../../../types/CommonTypes';
import NewsService from '../services/NewsService';

export class NewsStore {
  loading = false;

  newsList: NewsItem[] = [];
  newsData: Nullable<NewsItem> = null;

  private newsService: NewsService;

  constructor() {
    makeAutoObservable(this);
    this.newsService = new NewsService();
  }

  getAll = () => {
    this.setLoading(true);

    this.newsService
      .getAll()
      .then(list => {
        this.newsList = list;
      })
      .finally(() => this.setLoading(false));
  };

  get = (newsId: number) => {
    this.setLoading(true);

    this.newsService
      .get(newsId)
      .then(data => {
        this.newsData = data;
      })
      .finally(() => this.setLoading(false));
  };

  setLoading = (value: boolean) => {
    this.loading = value;
  };
}

import { makeAutoObservable } from 'mobx';

import NewsService from './NewsService';
import { News } from './models/News';
import { Nullable } from '../../base/types/BaseTypes';

export class NewsStore {
  loading = false;

  newsList: News[] = [];
  newsData: Nullable<News> = null;

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
      .catch(error => {})
      .finally(() => this.setLoading(false));
  };

  getOne = (newsId: number) => {
    this.setLoading(true);

    this.newsService
      .getOne(newsId)
      .then(data => {
        this.newsData = data;
      })
      .catch(error => {})
      .finally(() => this.setLoading(false));
  };

  setLoading = (value: boolean) => {
    this.loading = value;
  };
}

import { NewsItem } from '../models/News';

export class NewsFactory {
  create(data: any): NewsItem {
    return new NewsItem(data);
  }

  createList(data: any): NewsItem[] {
    let items: NewsItem[] = [];

    data.map((json: any) => {
      items.push(new NewsItem(json));
      return null;
    });

    return items;
  }
}

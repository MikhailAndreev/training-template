import { News } from './models/News';


export class NewsFactory {
  create(data: any): News {
    return new News(data);
  }

  createList(data: any): News[] {
    let items: News[] = [];

    data.map((json: any) => {
      items.push(new News(json));
      return null;
    });

    return items;
  }
}

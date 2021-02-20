import { ClassicElement } from 'react';

export default abstract class AbstractFactory {
  create<T>(Model: any, data: any): T {
    return new Model(data);
  }

  createList<T>(Model: any, data: any): T[] {
    let items: T[] = [];

    data.map((json: any) => {
      items.push(new Model(json));
      return null;
    });

    return items;
  }
}

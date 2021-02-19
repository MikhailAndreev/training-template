import BaseModel from '../../base/BaseModel';

export class NewsItem extends BaseModel {
  id: number | null = null;
  userId: number | null = null;
  title: string | null = null;
  body: string | null = null;

  constructor(props: any) {
    super();
    this.load(props);
  }
}

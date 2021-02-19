import AbstractModel from '../../../base/AbstractModel';

export class News extends AbstractModel {
  id: number | null = null;
  userId: number | null = null;
  title: string | null = null;
  body: string | null = null;

  constructor(props: any) {
    super();
    this.load(props);
  }
}

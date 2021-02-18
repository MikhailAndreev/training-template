import BaseModel from '../../base/BaseModel';

export class User extends BaseModel {
  active: boolean | null = null;
  name: string | null = null;
  email: string | null = null;

  constructor(props: any) {
    super();
    this.load(props);
  }
}

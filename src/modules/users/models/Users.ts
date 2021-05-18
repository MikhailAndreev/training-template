import AbstractModel from '../../../base/AbstractModel';

export class Users extends AbstractModel {
  id: string | null = null;
  name: string | null = null;
  userName: string | null = null;
  email: string | null = null;
  phone: string | null = null;
  address: { street: string; suite: string; city: string; zipcode: string } | null = null;

  constructor(props: any) {
    super();
    this.load(props);
  }
}

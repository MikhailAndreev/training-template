import { User } from './User';

export class UserFactory {
  create(data: any): User {
    return new User(data);
  }
}

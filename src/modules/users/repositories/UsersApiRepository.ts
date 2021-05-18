import AbstractApiRepository from '../../../base/repositories/AbstractApiRepository';
import { Users } from '../models/Users';

export default class UsersApiRepository extends AbstractApiRepository {
  getAllUsers = () => {
    return this.get<Users[]>({ url: `/users` });
  };

  getOneUser = (id: number) => {
    return this.get<Users>({ url: `/users/${id}` });
  };
}

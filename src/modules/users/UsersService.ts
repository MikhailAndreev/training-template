import UsersApiRepository from './repositories/UsersApiRepository';
import { UsersFactory } from './UsersFactory';
import { Users } from './models/Users';
// import NewsLocalRepository from './repositories/NewsLocalRepository';

export default class UsersService {
  usersApi: UsersApiRepository;
  //   newsLocal: NewsLocalRepository;
  usersFactory: UsersFactory;

  constructor() {
    this.usersApi = new UsersApiRepository();
    // this.newsLocal = new NewsLocalRepository();
    this.usersFactory = new UsersFactory();
  }

  getAllUsers = async (): Promise<Users[]> => {
    const { data } = await this.usersApi.getAllUsers();
    return this.usersFactory.createList<Users>(Users, data).slice(0, 12); // cut list for demo
  };

  getOneUser = async (id: number): Promise<Users> => {
    const { data } = await this.usersApi.getOneUser(id);
    return this.usersFactory.create<Users>(Users, data);
  };
}

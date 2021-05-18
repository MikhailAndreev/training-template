import { makeAutoObservable } from 'mobx';

import { Users } from './models/Users';
import { Nullable } from '../../base/types/BaseTypes';
import UsersService from './UsersService';

export class UsersStore {
  loading = false;

  usersList: Users[] = [];
  userData: Nullable<Users> = null;

  private usersService: UsersService;

  constructor() {
    makeAutoObservable(this);
    this.usersService = new UsersService();
  }

  getAllUsers = () => {
    this.setLoading(true);

    this.usersService
      .getAllUsers()
      .then(list => {
        console.log({ list });

        this.usersList = list;
      })
      .catch(error => {})
      .finally(() => this.setLoading(false));
  };

  getOneUser = (newsId: number) => {
    this.setLoading(true);

    this.usersService
      .getOneUser(newsId)
      .then(data => {
        this.userData = data;
      })
      .catch(error => {})
      .finally(() => this.setLoading(false));
  };

  setLoading = (value: boolean) => {
    this.loading = value;
  };
}

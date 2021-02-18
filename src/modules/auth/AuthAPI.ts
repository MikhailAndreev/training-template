import API from '../../services/ApiService';
import { IRegisterValues, ILoginValues } from './Auth';

export default class AuthAPI {
  register = ({ name, email, password }: IRegisterValues) => {
    return API.post({ url: '/auth/register', data: { name, email, password } });
  };

  login = ({ email, password }: ILoginValues) => {
    return API.post({ url: '/auth/login', data: { email, password } });
  };

  logout = () => {
    return API.post({ url: '/auth/logout' });
  };
}

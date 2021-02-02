import * as screens from '../screens';
import { RoutesType } from '../types/RouteTypes';
import { roles, EVERYBODY } from './roles';

export const routes: RoutesType = {
  MainScreen: {
    path: '/',
    label: 'Главная',
    credentials: EVERYBODY,
    component: screens.MainScreen,
  },
  SecretScreen: {
    path: '/secret-page',
    exact: true,
    label: 'Секретная страница',
    credentials: [roles.director],
    component: screens.SecretScreen,
  },
  NotFoundScreen: {
    path: '/not-found',
    label: '404 Страница не найдена',
    credentials: EVERYBODY,
    component: screens.NotFoundScreen,
  },
};

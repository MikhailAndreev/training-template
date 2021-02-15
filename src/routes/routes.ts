import { screens } from '../screens';
import { RoutesType } from '../types/RouteTypes';

export const SITE_NAME = 'Start template Neti';

type RoutesKeys = keyof typeof screens;

export const routes: RoutesType<RoutesKeys> = {
  MainScreen: {
    path: '/',
    exact: true,
    label: 'Главная',
    component: screens.MainScreen,
  },
  NotFoundScreen: {
    path: '/not-found',
    label: '404 Страница не найдена',
    component: screens.NotFoundScreen,
  },
};

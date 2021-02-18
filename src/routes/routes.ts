import { RoutesType } from '../types/RouteTypes';
import MainScreen from '../modules/main/screens/MainScreen';
import NotFoundScreen from '../modules/not-found/screens/NotFoundScreen';

const screens = { MainScreen, NotFoundScreen };

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

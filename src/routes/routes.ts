import { RoutesType } from './types/RouteTypes';
import MainScreen from '../modules/main/screens/MainScreen';
import NotFoundScreen from '../modules/not-found/screens/NotFoundScreen';
import NewsListScreen from '../modules/news/screens/NewsListScreen';
import NewsScreen from '../modules/news/screens/NewsScreen';

const screens = { MainScreen, NotFoundScreen, NewsListScreen, NewsScreen };

type RoutesKeys = keyof typeof screens;
export const routes: RoutesType<RoutesKeys> = {
  MainScreen: {
    path: '/',
    exact: true,
    label: 'Главная',
    component: screens.MainScreen,
  },
  NewsListScreen: {
    path: '/news',
    exact: true,
    label: 'Новости',
    component: screens.NewsListScreen,
  },
  NewsScreen: {
    path: '/news/:id',
    label: 'Новости',
    component: screens.NewsScreen,
  },
  NotFoundScreen: {
    path: '/not-found',
    label: '404 Страница не найдена',
    component: screens.NotFoundScreen,
  },
};

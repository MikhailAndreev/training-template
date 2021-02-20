import { RoutesType } from '../base/routes/types/RouteTypes';
import MainScreen from './main/MainScreen';
import NotFoundScreen from './not-found/NotFoundScreen';
import NewsListScreen from './news/NewsListScreen';
import NewsScreen from './news/NewsScreen';

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

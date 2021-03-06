import { RoutesType } from '../base/routes/types/RouteTypes';
import MainScreen from './main/MainScreen';
import NotFoundScreen from './not-found/NotFoundScreen';
import NewsListScreen from './news/NewsListScreen';
import NewsScreen from './news/NewsScreen';
import DesignPreviewScreen from './design/DesignPreviewScreen';
import UsersListScreen from './usersList/UsersListScreen';
import UserScreen from './usersList/UserScreen';

const screens = {
  MainScreen,
  NotFoundScreen,
  NewsListScreen,
  NewsScreen,
  DesignPreviewScreen,
  UsersListScreen,
  UserScreen,
};

type RoutesKeys = keyof typeof screens;
export const routes: RoutesType<RoutesKeys> = {
  MainScreen: {
    path: '/',
    exact: true,
    title: 'Главная',
    component: screens.MainScreen,
    // credentials: [roles.director],
  },
  NewsListScreen: {
    path: '/news',
    exact: true,
    title: 'Новости',
    component: screens.NewsListScreen,
  },
  NewsScreen: {
    path: '/news/:id',
    title: 'Новости',
    component: screens.NewsScreen,
  },
  DesignPreviewScreen: {
    path: '/design',
    exact: true,
    title: 'Дизайн',
    component: screens.DesignPreviewScreen,
  },
  UsersListScreen: {
    path: '/usersList',
    exact: true,
    title: 'Пользователи',
    component: screens.UsersListScreen,
  },
  UserScreen: {
    path: '/usersList/:id',
    exact: true,
    title: 'Пользователь',
    component: screens.UserScreen,
  },
  NotFoundScreen: {
    path: '/not-found',
    title: '404 Страница не найдена',
    component: screens.NotFoundScreen,
  },
};

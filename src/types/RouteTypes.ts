import * as screens from '../screens';
import { RouteProps } from 'react-router-dom';
import roles from '../routes/roles';

// Roles
export interface IRole {
  role: string;
  label: string;
}

export type RoleKeys = keyof typeof roles;
export type Roles = Record<RoleKeys, IRole>;

// Routes
export type routesKeys = keyof typeof screens;
export type RoutesType = Record<routesKeys, IRoute>;

export interface IRoute extends RouteProps {
  param?: string;
  path: string;
  label: string;
  visibleInHeader?: boolean;
  credentials: IRole[];
  props?: any;
}

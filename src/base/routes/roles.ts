import { RoleKeys } from './types/RouteTypes';

export const roles = {
  director: {
    role: 'director',
    label: 'Представитель агентства (администратор)',
  },
  agent: {
    role: 'agent',
    label: 'Агент',
  },
};

export const EVERYBODY = Object.keys(roles).map(key => roles[key as RoleKeys]);

export default roles;

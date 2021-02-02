import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { IRole, IRoute, RoleKeys, RoutesType } from '../types/RouteTypes';
import UIScreen from './UI/UIScreen';

interface RootComponentProps {
  routes: RoutesType;
}

const isSatisfied = (role: RoleKeys, credentials: IRole[]): boolean => {
  const mappedCredentials = credentials.map(credential => credential.role);

  return mappedCredentials.includes(role);
};

const RootComponent: FC<RootComponentProps> = ({ routes }) => {
  const routesArray = Object.values(routes);

  const renderRouteComponent = (route: IRoute) => {
    const { credentials, label, component: Component, props } = route;

    if (isSatisfied('director', credentials) && Component) {
      return (
        <UIScreen label={label}>
          <Component {...props} />
        </UIScreen>
      );
    }

    return <Redirect to="/not-found" />;
  };

  return (
    <main>
      <Switch>
        {routesArray.map(route => {
          const { component: Component, path, param = '', label, credentials, props, ...rest } = route;

          return (
            <Route key={`${path}/${param}`} path={`${path}/${param}`} {...rest}>
              {renderRouteComponent(route)}
            </Route>
          );
        })}
        <Route path="*">
          <Redirect to="/not-found" />
        </Route>
      </Switch>
    </main>
  );
};

export default RootComponent;

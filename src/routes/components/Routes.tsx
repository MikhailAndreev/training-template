import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { IRole, IRoute, RoleKeys } from '../types/RouteTypes';
import PageTitle from './PageTitle';

interface IRoutes {
  [key: string]: IRoute;
}

interface IRoutesProps {
  routes: IRoutes;
  role?: RoleKeys;
  disableRedirect?: boolean;
}

// Check roles
const isSatisfied = (role: RoleKeys, credentials: IRole[]): boolean => {
  const mappedCredentials = credentials.map(credential => credential.role);

  return mappedCredentials.includes(role);
};

const Routes: FC<IRoutesProps> = ({ routes, role, disableRedirect }) => {
  const routesArray = Object.values(routes);

  const renderRouteChildren = (route: IRoute) => {
    const { credentials, label, component: Component, props } = route;

    const renderRouteComponent = () => {
      if (Component) {
        return (
          <>
            <PageTitle pageTitle={label} />
            <Component {...props} />
          </>
        );
      }
      return <></>;
    };

    if (role && credentials) {
      if (isSatisfied(role, credentials)) {
        return renderRouteComponent();
      }
    } else {
      return renderRouteComponent();
    }

    return <Redirect to="/not-found" />;
  };

  return (
    <main>
      <Switch>
        {routesArray.map(route => {
          const { component: Component, path, label, credentials, props, ...rest } = route;

          return (
            <Route key={path} path={path} {...rest}>
              {renderRouteChildren(route)}
            </Route>
          );
        })}

        {!disableRedirect && (
          <Route path="*">
            <Redirect to="/not-found" />
          </Route>
        )}
      </Switch>
    </main>
  );
};

export default Routes;

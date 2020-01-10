import React, { useContext, useCallback } from 'react';
import {
  Redirect,
  Route,
} from 'react-router-dom';

import { AuthContext } from '../contexts/auth';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  // get where the route was meant to go and pass that to login so it can route appropriately
  const { isLoggedIn } = useContext(AuthContext);

  const protectedRender = useCallback((props) => {
    if (!isLoggedIn) {
      return (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location },
          }}
        />
      );
    }

    return <Component {...props} />;
  }, [isLoggedIn]);

  return <Route {...rest} render={protectedRender} />;
};

export default ProtectedRoute;

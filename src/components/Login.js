import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import { AuthContext } from '../contexts/auth';

// should be passed the route the user attempted to access
// once logged in, go to route
// otherwise if no route, then go to lobby if logged in
const Login = () => {
  const { isLoggedIn, login } = useContext(AuthContext);

  if (isLoggedIn) return <Redirect to="/" />; // if no route to

  return (
    <Button onClick={login} variant="contained">
      Login
    </Button>
  );
};

export default Login;

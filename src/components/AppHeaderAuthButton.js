import React, { useContext } from 'react';
import { Button } from '@material-ui/core';

import { CleanLink } from './styles';
import { AuthContext } from '../contexts/auth';

const AppHeaderAuthButton = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);

  if (isLoggedIn) {
    return (
      <Button onClick={logout} color="inherit">
        Logout
      </Button>
    );
  }

  return (
    <CleanLink to="/login">
      <Button color="inherit">Login</Button>
    </CleanLink>
  );
};

export default AppHeaderAuthButton;

import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import Lobby from './Lobby';
import Login from './Login';
import ProtectedRoute from './ProtectedRoute';
import Room from './Room';

const RootRouter = () => (
  <Switch>
    <Route exact path="/">
      <Lobby />
    </Route>
    <Route path="/login">
      <Login />
    </Route>
    <ProtectedRoute path="/room">
      <Room />
    </ProtectedRoute>
  </Switch>
);

export default RootRouter;

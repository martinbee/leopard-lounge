import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import Lobby from './Lobby';
import Login from './Login';

const RootRouter = () => (
  <Switch>
    <Route exact path="/">
      <Lobby />
    </Route>
    <Route path="/login">
      <Login />
    </Route>
  </Switch>
);

export default RootRouter;

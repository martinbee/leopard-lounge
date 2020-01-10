import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import Lobby from './Lobby';
import Login from './Login';

const RootRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Lobby />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default RootRouter;

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={(props) => (
//     fakeAuth.isAuthenticated === true
//       ? <Component {...props} />
//       : <Redirect to={{
//           pathname: '/login',
//           state: { from: props.location }
//         }} />
//   )} />
// )
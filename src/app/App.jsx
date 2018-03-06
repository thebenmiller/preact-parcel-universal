import { h, Component } from 'preact';
import { Switch, Route, Redirect } from 'react-router-dom';
import AsyncRoute from 'components/AsyncRoute';

import Home from 'views/Home';

import Nav from 'components/Nav';
import routes from '../shared/routes';

import 'css/main.css';

const asyncRoutes = {
  Test: 'views/Test',
};

const App = () => (
  <div>
    <Nav />
    <Switch>
      <AsyncRoute path={routes.TEST} module={asyncRoutes.Test} />
      <Route exact path={routes.HOME} component={Home} />
    </Switch>
  </div>
);

export default App;

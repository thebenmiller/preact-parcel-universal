import { h, Component } from 'preact';
import { Switch, Route, Redirect, Match } from 'react-router-dom';

import Home from 'views/Home';

import Nav from 'components/Nav';
import routes from '../shared/routes';
import AsyncRoute from 'components/AsyncRoute';

import 'css/main.css';

const App = () => (
  <div>
    <Nav />
    <Switch>
      <AsyncRoute path={routes.TEST} module={import('views/Test')} />
      <Route path={routes.HOME} component={Home} />
    </Switch>
  </div>
);

export default App;

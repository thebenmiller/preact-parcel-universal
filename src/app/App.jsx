import { h, Component } from 'preact';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './views/Home';
import Test from './views/Test';

import Nav from './components/Nav';

import routes from '../shared/routes';

import './css/main.css';

const App = () => (
  <div>
    <Nav />
    <Switch>
      <Route exact path={routes.TEST} component={Test} />
      <Route exact path={routes.HOME} component={Home} />
    </Switch>
  </div>
);

export default App;

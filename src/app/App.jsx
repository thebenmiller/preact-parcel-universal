import { h, Component } from 'preact';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './views/Home';
import Test from './views/Test';

import Nav from './components/Nav';

import './css/main.css';

const App = () => (
  <div>
    <Nav />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/" component={Test} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;

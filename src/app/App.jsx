import { h, Component } from 'preact';
import { Switch, Route, Redirect, Match, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Home from 'views/Home';
import About from 'views/About';

import Nav from 'components/Nav';
import Loader from 'components/Loader';
import routes from '../shared/routes';
import AsyncRoute from 'components/AsyncRoute';

import 'css/main.css';

const App = props => (
  <div>
    <Nav />
    <TransitionGroup>
      <CSSTransition key={props.location.key} classNames="fade" timeout={500}>
        <Switch location={props.location}>
          {/*this is ugly but works for transitions for now */}
          <Route
            path={routes.TEST}
            render={() => (
              <div>
                <AsyncRoute path={routes.TEST} module={import('views/Test')} />
              </div>
            )}
          />
          <Route path={routes.ABOUT} component={About} />
          <Route path={routes.HOME} component={Home} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  </div>
);
export default withRouter(App);

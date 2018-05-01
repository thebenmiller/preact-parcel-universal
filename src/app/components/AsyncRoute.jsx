import { h, Component } from 'preact';
import { Route } from 'react-router-dom';
import { Transition } from 'react-transition-group';

import Loader from 'components/Loader';

const AsyncRoute = (props) => {
  const { path, module } = props;
  const isServer = !(typeof window !== 'undefined' && window.document);
  const ImportedComponent = () => (isServer ? module.default : <AsyncComponent module={module} />);
  return <Route exact={props.exact} path={path} component={ImportedComponent} />;
};

class AsyncComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { module: this.props.module, component: null };
  }
  componentWillMount() {
    if (this.state.module && !this.state.component) {
      this.state.module.then(component => this.setState({ component: component.default }));
    }
  }
  render() {
    const MyComponent = this.state.component;
    if (MyComponent) return <MyComponent {...this.props} />;
    return <Loader />;
  }
}

export default AsyncRoute;

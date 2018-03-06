import { h, Component } from 'preact';
import { Route } from 'react-router-dom';

const AsyncRoute = props => {
  const { path, module } = props;
  const component = <AsyncComponent module={props.module} />;
  return <Route path={path} component={() => component} />;
};

class AsyncComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { module: this.props.module, component: null };
  }
  componentWillMount() {
    if (this.state.module && !this.state.component) {
      Promise.resolve(import(this.state.module)).then(component => {
        return this.setState({ component });
      });
    }
  }
  render() {
    if (this.state.component) return this.state.component.default();
  }
}

export default AsyncRoute;

import App from '../app/App';
import { h } from 'preact';
import { StaticRouter } from 'react-router-dom';

const context = {};

export default url => (
  <StaticRouter location={url} context={context}>
    <App />
  </StaticRouter>
);

import App from '../app/App';

export default url => (
  <StaticRouter location={url}>
    <App />
  </StaticRouter>
);

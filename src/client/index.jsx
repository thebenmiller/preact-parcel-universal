import { h, render } from 'preact';
import 'preact/devtools';
import { BrowserRouter } from 'react-router-dom';
import App from '../app/App';

const mountNode = document.getElementById('root');

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  mountNode,
  mountNode.lastChild,
);

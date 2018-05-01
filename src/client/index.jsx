import React from 'react';
import { h, render } from 'preact';
import 'preact/devtools';
import { BrowserRouter } from 'react-router-dom';
import App from '../app/App';

const root = document.getElementById('root');

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  root,
  root.lastChild,
);

import 'module-alias/register';
import express from 'express';
import ServerApp from './ServerApp';
import render from 'preact-render-to-string';
import fs from 'fs';
import path from 'path';

import routes from '../shared/routes';

const publicPath = path.join(__dirname, '../public');

const template = fs.readFileSync(`${publicPath}/index.html`, 'utf-8').toString();

const app = express();

app.use('/public', express.static(publicPath));

app.get(Object.values(routes), (req, res) => {
  const content = ServerApp(req.originalUrl);
  const contentString = render(content);
  const html = template.replace('div id="root"></div>', `div id="root">${contentString}</div>`);
  res.send(html);
});

app.use('*', (req, res) => {
  res.status(404).send('404');
});

app.listen(1234);

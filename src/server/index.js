import express from 'express';
import ServerApp from './ServerApp';
import render from 'preact-render-to-string';
import fs from 'fs';

import routes from '../shared/routes';

const template = fs.readFileSync('dist/public/index.html').toString();

const app = express();

app.use('/public', express.static(`${__dirname}/../public`));

app.get(Object.values(routes), (req, res) => {
  const content = ServerApp(req.originalUrl);
  const contentString = render(content);
  const html = template.replace('div id="root"></div>', `div id="root">${contentString}</div>`);
  res.send(html);
});

app.use('*', (req, res) => {
  res.send('404', 404);
});

app.listen(1234);

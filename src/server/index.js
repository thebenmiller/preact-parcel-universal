import express from 'express';
import render from 'preact-render-to-string';
import { StaticRouter } from 'react-router-dom';
import ServerApp from './ServerApp';

const app = express();

app.use('./dist', express.static(`${__dirname}../client`));
app.get('/*', (req, res) => {
  const html = ServerApp(req.originalUrl);
  res.send(render(html));
});

app.listen(1234);

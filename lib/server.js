import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import config from './config';
import serverRender from './server-render';

const server = express();
server.use(bodyParser.json());

// server.use(sassMiddleware({
//   src: path.join(__dirname, 'sass'),
//   dest: path.join(__dirname, 'public'),
// }));

server.set('view engine', 'ejs');

server.get('*', (req, res) => {
  res.render('index', serverRender(req.path));
});

server.use(express.static('public'));

server.listen(config.port, config.host, () => {
  console.info('Express listening on port', config.port); // eslint-disable-line no-console
});

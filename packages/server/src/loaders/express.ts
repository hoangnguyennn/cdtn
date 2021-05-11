import { Application } from 'express';

import routes from '../apis/routes';

export default ({ app }: { app: Application }) => {
  // load middlewares

  app.get('/', (req, res) => {
    return res.send('Hello');
  });

  // load api routes
  app.use(routes);

  // load handle 404 error
  // load common error
};

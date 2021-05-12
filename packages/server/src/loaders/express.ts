import { Application } from 'express';

import routes from '../apis/routes';
import notFound from '../helpers/notFound';

export default ({ app }: { app: Application }): void => {
	// load middlewares

	app.get('/', (req, res) => {
		return res.send('Hello');
	});

	// load api routes
	app.use(routes);

	// load handle 404 error
	app.use(notFound);

	// load common error
};

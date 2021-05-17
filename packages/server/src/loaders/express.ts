import { Application, json, urlencoded } from 'express';
import { errors } from 'celebrate';
import cors from 'cors';

import routes from '../apis/routes';
import notFound from '../helpers/notFound';

export default ({ app }: { app: Application }): void => {
	// load middlewares
	app.use(cors());
	app.use(json());
	app.use(urlencoded({ extended: true }));

	app.get('/', (req, res) => {
		return res.send('Hello');
	});

	// load api routes
	app.use(routes);

	// load handle celebrate error
	app.use(errors());

	// load handle 404 error
	app.use(notFound);

	// load common error
};

import { Application } from 'express';

import expressLoader from './express';
import mongooseLoader from './mongoose';

export default async ({ app }: { app: Application }): Promise<void> => {
	// load mongoose
	await mongooseLoader();

	// load express
	expressLoader({ app });
};

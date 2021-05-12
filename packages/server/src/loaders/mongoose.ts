import { connect, connection } from 'mongoose';

import configs from '../configs';

export default async (): Promise<void> => {
	await connect(configs.mongoUrl, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	});

	connection.on('error', () => {
		console.error('Connection error');
	});

	connection.once('open', () => {
		console.log('MongoDB connected');
	});
};

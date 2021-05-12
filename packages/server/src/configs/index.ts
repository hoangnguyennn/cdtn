import { config } from 'dotenv';

const envLoaded = config();

if (!envLoaded) {
	throw new Error('.env not found!!!');
}

export default {
	port: Number(process.env.PORT),
	mongoUrl: String(process.env.MONGO_URL),
};

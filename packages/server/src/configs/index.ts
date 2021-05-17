import { config } from 'dotenv';

const envLoaded = config();

if (!envLoaded) {
	throw new Error('.env not found!!!');
}

export default {
	port: Number(process.env.PORT),
	mongoUrl: String(process.env.MONGO_URL),
	tokenSecret: String(process.env.TOKEN_SECRET),
	tokenExpiresIn: String(process.env.TOKEN_EXPIRES_IN),
};

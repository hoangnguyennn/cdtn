import jwt from 'jsonwebtoken';
import configs from '../configs';
import { IDecodeToken, IPayload } from '../interfaces';

export const encodeToken = (payload: IPayload) => {
	return jwt.sign(payload, configs.tokenSecret, {
		expiresIn: configs.tokenExpiresIn,
	});
};

export const decodeToken = (token: string): IDecodeToken => {
	try {
		const decode = jwt.verify(token, configs.tokenSecret);
		return {
			isValid: true,
			payload: decode as IPayload,
		};
	} catch (e) {
		return {
			isValid: false,
			payload: {} as IPayload,
		};
	}
};

export default {
	encodeToken,
	decodeToken,
};

import { Request, Response, NextFunction } from 'express';
import {
	COMMON_MESSAGE,
	forbidden,
	unauthorized,
} from '../helpers/commonResponse';
import { decode } from '../utils/token';

const checkAuth = (req: Request, res: Response, next: NextFunction) => {
	const token = req.headers.authorization;

	if (!token) {
		return unauthorized(next, COMMON_MESSAGE.UNAUTHORIZED);
	}

	const decoded = decode(token);

	if (!decoded) {
		return forbidden(next, COMMON_MESSAGE.INVALID_TOKEN);
	}

	res.locals.userId = decoded.userId;
	return next();
};

export default {
	checkAuth,
};

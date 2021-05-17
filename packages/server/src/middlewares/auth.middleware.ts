import { Request, Response, NextFunction } from 'express';
import { COMMON_MESSAGE, unauthorized } from '../helpers/commonResponse';
import { decode } from '../utils/token';

export const checkAuth = (req: Request, res: Response, next: NextFunction) => {
	const token = req.headers.authorization;

	if (!token) {
		return unauthorized(next, COMMON_MESSAGE.UNAUTHORIZED);
	}

	const decoded = decode(token);

	if (!decoded) {
		return unauthorized(next, COMMON_MESSAGE.INVALID_TOKEN);
	}

	res.locals.userId = decoded.userId;
	return next();
};

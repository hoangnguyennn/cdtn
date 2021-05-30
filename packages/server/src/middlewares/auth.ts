import { Request, Response, NextFunction } from 'express';
import {
	COMMON_MESSAGE,
	forbidden,
	HttpError,
	HttpStatusCode,
	unauthorized,
} from '../helpers/commonResponse';
import { UserType } from '../interfaces/enums';
import { decode } from '../utils/token';
import UserService from '../services/user';
import { FORBIDDEN, NOT_FOUND } from '../constants/commonResponseMessages';

const checkAuth = (req: Request, res: Response, next: NextFunction) => {
	const bearerToken = req.headers.authorization;

	if (!bearerToken) {
		return unauthorized(next, COMMON_MESSAGE.UNAUTHORIZED);
	}

	const token = String(bearerToken).split(' ')[1];
	const decoded = decode(token);

	if (!decoded) {
		return forbidden(next, COMMON_MESSAGE.INVALID_TOKEN);
	}

	res.locals.userId = decoded.userId;
	return next();
};

const checkRole = (roles: UserType[]) => {
	return async (req: Request, res: Response, next: NextFunction) => {
		const { userId } = res.locals;
		const user = await UserService.getById(userId);

		if (!user) {
			throw new HttpError(NOT_FOUND, HttpStatusCode.HTTP_404);
		}

		if (!roles.includes(user.userType)) {
			throw new HttpError(FORBIDDEN, HttpStatusCode.HTTP_403);
		}

		return next();
	};
};

export default {
	checkAuth,
	checkRole,
};

import { NextFunction, Request, Response } from 'express';
import {
	FORBIDDEN,
	INVALID_TOKEN,
	UNAUTHORIZED,
} from '../constants/commonResponseMessages';
import { commonResponse } from '../helpers/commonResponse';
import { HttpStatusCode, UserTypes } from '../interfaces/enums';
import { decodeToken } from '../utils/token';

export const checkAuth = (
	req: Request,
	res: Response,
	next: NextFunction
): void => {
	const token = req.headers.authorization;

	if (!token) {
		commonResponse(res, {
			hasError: true,
			httpStatusCode: HttpStatusCode.HTTP_401,
			message: UNAUTHORIZED,
		});

		return;
	}

	const decode = decodeToken();
	if (!decode.isValid) {
		commonResponse(res, {
			hasError: true,
			httpStatusCode: HttpStatusCode.HTTP_401,
			message: INVALID_TOKEN,
		});

		return;
	}

	res.locals.userId = decode.userId;
	next();
	return;
};

export const checkUserType = (userType: UserTypes) => {
	return (req: Request, res: Response, next: NextFunction) => {
		if (userType === UserTypes.ADMIN) {
			next();
			return;
		}

		next();
		return;
	};
};

export const checkSameUser = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { userId } = res.locals;
	const { id } = req.params;

	if (userId === id) {
		next();
		return;
	}

	commonResponse(res, {
		hasError: true,
		httpStatusCode: HttpStatusCode.HTTP_403,
		message: FORBIDDEN,
	});

	return;
};

export default {
	checkAuth,
	checkUserType,
};

import { NextFunction, Request, Response } from 'express';

import { generate } from '../../utils/token';
import { ILoginRequest, IUserRegister } from '../../interfaces';
import { IUser } from '../../interfaces/IDocuments';
import { mapUserToResponse } from '../../helpers/mappingResponse';
import { notFound, success, unauthorized } from '../../helpers/commonResponse';
import { UserTypes } from '../../interfaces/enums';
import AuthService from '../../services/auth';

export const register = async (req: Request, res: Response) => {
	const userRequest: IUserRegister = req.body;
	userRequest.passwordHashed = userRequest.password;
	userRequest.userType = UserTypes.CUSTOMER;

	const userCreated = await AuthService.register(userRequest);
	return success(res, mapUserToResponse(userCreated));
};

export const login = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const userRequest: ILoginRequest = req.body;

	const loginServiceResponse = await AuthService.login(userRequest);

	if (loginServiceResponse.hasError) {
		return notFound(next, loginServiceResponse.message || '');
	}

	const user = loginServiceResponse.data as IUser;
	const token = generate({ userId: user._id });

	return success(res, {
		token,
		user: mapUserToResponse(user),
	});
};

export const getCurrentUser = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { userId } = res.locals;

	const user = await AuthService.getCurrentUser(userId);

	if (!user) {
		return unauthorized(next);
	}

	return success(res, mapUserToResponse(user));
};

export default {
	getCurrentUser,
	login,
	register,
};

import { NextFunction, Request, Response } from 'express';

import { ILoginRequest, IUserRegister } from '../../interfaces';
import { mapUserToResponse } from '../../helpers/mappingResponse';
import { notFound, success, unauthorized } from '../../helpers/commonResponse';
import AuthService from '../../services/auth.service';
import { generate } from '../../utils/token';
import { IUser } from '../../interfaces/IDocuments';
import { UserTypes } from '../../interfaces/enums';

export const registerAccountController = async (
	req: Request,
	res: Response
) => {
	const userRequest: IUserRegister = req.body;
	userRequest.passwordHashed = userRequest.password;
	userRequest.userType = UserTypes.CUSTOMER;

	const userCreated = await AuthService.registerAccountService(userRequest);

	return success(res, mapUserToResponse(userCreated));
};

export const loginController = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const userRequest: ILoginRequest = req.body;

	const loginServiceResponse = await AuthService.loginService(userRequest);
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

export const getCurrentUserController = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { userId } = res.locals;

	const user = await AuthService.getCurrentUserService(userId);

	if (!user) {
		return unauthorized(next);
	}

	return success(res, mapUserToResponse(user));
};

export default {
	registerAccountController,
	loginController,
	getCurrentUserController,
};

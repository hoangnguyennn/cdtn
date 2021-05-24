import { NextFunction, Request, Response } from 'express';

import { generate } from '../../utils/token';
import { ILoginRequest, IRegisterRequest, IUserCreate } from '../../interfaces';
import { IUser } from '../../interfaces/IDocuments';
import { mapUserToResponse } from '../../helpers/mappingResponse';
import { notFound, success, unauthorized } from '../../helpers/commonResponse';
import { UserTypes } from '../../interfaces/enums';
import AuthService from '../../services/auth';

export const register = async (req: Request, res: Response) => {
	const userRequest: IRegisterRequest = req.body;
	const userCreate: IUserCreate = {
		...userRequest,
		passwordHashed: userRequest.password,
		userType: UserTypes.CUSTOMER,
	};

	const userCreated = await AuthService.register(userCreate);
	return success(res, mapUserToResponse(userCreated));
};

export const login = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const credential: ILoginRequest = req.body;

	const response = await AuthService.login(credential);

	if (response.hasError) {
		return notFound(next, response.message || '');
	}

	const user = response.data as IUser;
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

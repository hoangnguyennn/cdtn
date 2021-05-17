import { Request, Response } from 'express';

import { commonResponse } from '../../helpers/commonResponse';
import UserService from '../../services/user.service';

export const register = async (req: Request, res: Response) => {
	const user = req.body;
	const serviceResponse = await UserService.registerAccount(user);
	commonResponse(res, serviceResponse);
};

export const login = async (req: Request, res: Response) => {
	const login = req.body;
	const serviceResponse = await UserService.login(login);
	commonResponse(res, serviceResponse);
};

export default {
	register,
	login,
};

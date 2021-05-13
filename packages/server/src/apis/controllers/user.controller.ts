import { Request, Response } from 'express';

import { commonResponse } from '../../helpers/commonResponse';
import UserService from '../../services/user.service';

export const getAllUser = async (
	req: Request,
	res: Response
): Promise<void> => {
	const serviceResponse = await UserService.getAll();
	commonResponse(res, serviceResponse);
};

export const getUserById = async (
	req: Request,
	res: Response
): Promise<void> => {
	const { id } = req.params;
	const serviceResponse = await UserService.getById(id);
	commonResponse(res, serviceResponse);
};

export const createNewUser = async (
	req: Request,
	res: Response
): Promise<void> => {
	const user = req.body;
	const serviceResponse = await UserService.createNewUser(user);
	commonResponse(res, serviceResponse);
};

export const updateUserById = async (
	req: Request,
	res: Response
): Promise<void> => {
	const { id } = req.params;
	const user = req.body;
	const serviceResponse = await UserService.updateUserById(id, user);
	commonResponse(res, serviceResponse);
};

export default {
	getAllUser,
	getUserById,
	createNewUser,
	updateUserById,
};

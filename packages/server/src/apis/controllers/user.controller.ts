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

export default {
	getAllUser,
};

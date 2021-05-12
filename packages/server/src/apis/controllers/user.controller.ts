import { Request, Response, NextFunction } from 'express';

import { commonResponse } from '../..//helpers/commonResponse';
import UserService from '../../services/user.service';

export const getAllUser = async (req: Request, res: Response) => {
  const serviceResponse = await UserService.getAll();
  commonResponse(res, serviceResponse);
};

export default {
  getAllUser,
};

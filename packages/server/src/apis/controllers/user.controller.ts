import { Request, Response, NextFunction } from 'express';
import UserService from '../../services/user.service';

export const getAllUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const users = await UserService.getAll();

  res.status(200);
  res.json(users);
  return res.end();
};

export default {
  getAllUser,
};

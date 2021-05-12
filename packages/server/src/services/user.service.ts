import { HttpStatusCode } from '../interfaces/enums';
import { IServiceResponse, IUser } from '../interfaces';
import User from '../models/user.model';

export const getAll = async (): Promise<IServiceResponse<IUser[]>> => {
  const users = await User.find();

  return {
    hasError: false,
    httpStatusCode: HttpStatusCode.HTTP_200,
    data: users,
  };
};

export default {
  getAll,
};

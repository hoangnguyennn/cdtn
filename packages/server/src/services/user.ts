import {
	COMMON_MESSAGE,
	HttpError,
	HttpStatusCode,
} from '../helpers/commonResponse';
import { IUser } from '../interfaces/IDocuments';
import UserModel from '../models/user';

const getById = async (id: string): Promise<IUser> => {
	const user = await UserModel.findOne({ _id: id });

	if (!user) {
		throw new HttpError(COMMON_MESSAGE.NOT_FOUND, HttpStatusCode.HTTP_404);
	}

	return user;
};

export default {
	getById,
};

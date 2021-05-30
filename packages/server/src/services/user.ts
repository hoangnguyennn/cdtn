import { Types } from 'mongoose';
import {
	COMMON_MESSAGE,
	HttpError,
	HttpStatusCode,
} from '../helpers/commonResponse';
import { IUser } from '../interfaces/IDocuments';
import { IUserUpdate } from '../interfaces';
import UserModel from '../models/user';

const getById = async (id: string | Types.ObjectId): Promise<IUser> => {
	const user = await UserModel.findOne({ _id: id });

	if (!user) {
		throw new HttpError(COMMON_MESSAGE.NOT_FOUND, HttpStatusCode.HTTP_404);
	}

	return user;
};

const update = async (id: string, user: IUserUpdate): Promise<IUser> => {
	const userUpdate = Object.entries({
		email: user.email,
		fullName: user.fullName,
		phone: user.phone,
		address: user.address,
		passwordHashed: user.passwordHashed,
	}).reduce((result: any, [key, value]) => {
		if (value) {
			result[key] = value;
		}

		return result;
	}, {});

	const userUpdated = await UserModel.findByIdAndUpdate(id, userUpdate, {
		new: true,
	});

	if (!user) {
		throw new HttpError(COMMON_MESSAGE.NOT_FOUND, HttpStatusCode.HTTP_404);
	}

	return userUpdated as IUser;
};

export default {
	getById,
	update,
};

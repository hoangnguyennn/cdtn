import { Types } from 'mongoose';
import {
	COMMON_MESSAGE,
	HttpError,
	HttpStatusCode,
} from '../helpers/commonResponse';
import { IUser } from '../interfaces/IDocuments';
import { IUserUpdate } from '../interfaces';
import UserModel from '../models/user';
import { removeInvalidFields } from '../utils';

const getById = async (id: string | Types.ObjectId): Promise<IUser> => {
	const user = await UserModel.findOne({ _id: id });

	if (!user) {
		throw new HttpError(COMMON_MESSAGE.NOT_FOUND, HttpStatusCode.HTTP_404);
	}

	return user;
};

const update = async (id: string, user: IUserUpdate): Promise<IUser> => {
	const userUpdate = removeInvalidFields({
		email: user.email,
		fullName: user.fullName,
		phone: user.phone,
		address: user.address,
		passwordHashed: user.passwordHashed,
	});

	const userUpdated = await UserModel.findByIdAndUpdate(
		id,
		{ $set: userUpdate },
		{ new: true }
	);

	if (!userUpdated) {
		throw new HttpError(COMMON_MESSAGE.NOT_FOUND, HttpStatusCode.HTTP_404);
	}

	return userUpdated;
};

export default {
	getById,
	update,
};

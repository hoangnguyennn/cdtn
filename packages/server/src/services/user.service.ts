import { HttpStatusCode } from '../interfaces/enums';
import {
	IServiceResponse,
	IUser,
	IUserCreate,
	IUserUpdate,
} from '../interfaces';
import User from '../models/user.model';
import { NOT_FOUND } from '../constants/commonResponseMessages';

export const getAll = async (): Promise<IServiceResponse<IUser[]>> => {
	const users = await User.find();

	return {
		hasError: false,
		httpStatusCode: HttpStatusCode.HTTP_200,
		data: users,
	};
};

export const getById = async (id: string): Promise<IServiceResponse<IUser>> => {
	const user = await User.findOne({ _id: id });

	if (!user) {
		return {
			hasError: true,
			httpStatusCode: HttpStatusCode.HTTP_404,
			message: NOT_FOUND,
		};
	}

	return {
		hasError: false,
		httpStatusCode: HttpStatusCode.HTTP_200,
		data: user,
	};
};

export const createNewUser = async (
	user: IUserCreate
): Promise<IServiceResponse<IUser>> => {
	const userCreated: IUser = await User.create({
		email: user.email,
		passwordHashed: user.passwordHashed,
		fullName: user.fullName,
		address: user.address || '',
		phone: user.phone,
		userType: user.userType,
	});

	return {
		hasError: false,
		httpStatusCode: HttpStatusCode.HTTP_200,
		data: userCreated,
	};
};

export const updateUserById = async (
	id: string,
	user: IUserUpdate
): Promise<IServiceResponse<IUser>> => {
	const userUpdate: IUserUpdate = {};

	if (user.fullName) {
		userUpdate.fullName = user.fullName;
	}

	if (user.phone) {
		userUpdate.phone = user.phone;
	}

	if (user.address) {
		userUpdate.address = user.address;
	}

	const userUpdated = await User.findOneAndUpdate(
		{ _id: id },
		{ $set: userUpdate },
		{ new: true }
	);

	if (!userUpdated) {
		return {
			hasError: true,
			httpStatusCode: HttpStatusCode.HTTP_404,
			message: NOT_FOUND,
		};
	}

	return {
		hasError: false,
		httpStatusCode: HttpStatusCode.HTTP_200,
		data: userUpdated,
	};
};

export default {
	getAll,
	getById,
	createNewUser,
	updateUserById,
};

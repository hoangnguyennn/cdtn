import { HttpStatusCode } from '../interfaces/enums';
import { IServiceResponse, IUser, IUserRequest } from '../interfaces';
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
	user: IUserRequest
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

export default {
	getAll,
	getById,
	createNewUser,
};

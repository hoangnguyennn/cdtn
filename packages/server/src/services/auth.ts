import { COMMON_MESSAGE } from '../helpers/commonResponse';
import {
	ILoginRequest,
	IServiceCommonResponse,
	IUserCreate,
} from '../interfaces';
import { IUser } from '../interfaces/IDocuments';
import UserModel from '../models/user';

export const register = async (user: IUserCreate): Promise<IUser> => {
	return UserModel.create({
		email: user.email,
		passwordHashed: user.passwordHashed,
		fullName: user.fullName,
		phone: user.phone,
		userType: user.userType,
		isActivated: true,
	});
};

export const login = async (
	login: ILoginRequest
): Promise<IServiceCommonResponse<IUser>> => {
	const user = await UserModel.findOne({ email: login.email });

	if (!user) {
		return {
			hasError: true,
			message: COMMON_MESSAGE.NOT_FOUND,
		};
	}

	if (user.passwordHashed !== login.password) {
		return {
			hasError: true,
			message: COMMON_MESSAGE.NOT_FOUND,
		};
	}

	return {
		hasError: false,
		data: user,
	};
};

export const getCurrentUser = async (id: string): Promise<IUser | null> => {
	return UserModel.findOne({ _id: id });
};

export default {
	register,
	login,
	getCurrentUser,
};

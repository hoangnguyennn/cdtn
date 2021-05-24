import { COMMON_MESSAGE } from '../helpers/commonResponse';
import {
	ILoginRequest,
	IServiceCommonResponse,
	IUserRegister,
} from '../interfaces';
import { IUser } from '../interfaces/IDocuments';
import User from '../models/user';

export const register = async (userRegister: IUserRegister): Promise<IUser> => {
	return User.create({
		email: userRegister.email,
		passwordHashed: userRegister.passwordHashed,
		fullName: userRegister.fullName,
		phone: userRegister.phone,
		userType: userRegister.userType,
		isActivated: true,
	});
};

export const login = async (
	userLogin: ILoginRequest
): Promise<IServiceCommonResponse<IUser>> => {
	const user = await User.findOne({ email: userLogin.email });

	if (!user) {
		return {
			hasError: true,
			message: COMMON_MESSAGE.NOT_FOUND,
		};
	}

	if (user.passwordHashed !== userLogin.password) {
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
	return User.findOne({ _id: id });
};

export default {
	register,
	login,
	getCurrentUser,
};

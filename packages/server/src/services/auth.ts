import UserModel from '../models/user';
import {
	COMMON_MESSAGE,
	HttpError,
	HttpStatusCode,
} from '../helpers/commonResponse';
import { ILogin, IUserCreate } from '../interfaces';
import { IUser } from '../interfaces/IDocuments';

const login = async (credential: ILogin): Promise<IUser> => {
	const user = await UserModel.findOne({ email: credential.email });

	if (!user) {
		throw new HttpError(COMMON_MESSAGE.NOT_FOUND, HttpStatusCode.HTTP_404);
	}

	if (user.passwordHashed !== credential.password) {
		throw new HttpError(COMMON_MESSAGE.NOT_FOUND, HttpStatusCode.HTTP_404);
	}

	return user;
};

const register = async (user: IUserCreate): Promise<IUser> => {
	return UserModel.create({
		email: user.email,
		passwordHashed: user.passwordHashed,
		fullName: user.fullName,
		phone: user.phone,
		userType: user.userType,
		isActivated: user.isActivated,
	});
};

export default {
	login,
	register,
};

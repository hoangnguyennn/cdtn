import { IUserResponse } from '../interfaces';
import { IUser } from '../interfaces/IDocuments';

export const mapUserToResponse = (user: IUser): IUserResponse => {
	return {
		id: user._id,
		email: user.email,
		fullName: user.fullName,
		phone: user.phone,
		address: user.address,
	};
};

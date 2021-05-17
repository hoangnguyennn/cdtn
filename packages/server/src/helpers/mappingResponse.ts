import { IUser, IUserResponse } from '../interfaces';

export const mapDataToUserResponse = (user: IUser): IUserResponse => {
	return {
		_id: user._id,
		fullName: user.fullName,
		address: user.address,
		email: user.email,
		phone: user.phone,
	};
};

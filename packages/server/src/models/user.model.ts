import { model, Schema } from 'mongoose';

import { IUser } from '../interfaces';
import { UserTypes } from '../interfaces/enums';
import Names from '../constants/databaseCollectionNames';

const userSchema = new Schema<IUser>({
	email: {
		type: String,
		unique: true,
		required: true,
	},
	passwordHashed: {
		type: String,
		required: true,
	},
	fullName: {
		type: String,
		required: true,
	},
	address: String,
	phone: {
		type: String,
		required: true,
	},
	userType: {
		type: String,
		enum: UserTypes,
		default: UserTypes.CUSTOMER,
	},
	isActivated: {
		type: Boolean,
		default: function () {
			const userType = (this as any)['userType']
				? (this as any)['userType']
				: UserTypes.MANAGER;

			if (userType === UserTypes.MANAGER) {
				return false;
			} else if (userType === UserTypes.CUSTOMER) {
				return true;
			}

			return false;
		},
	},
});

const User = model<IUser>(Names.USER, userSchema);
export default User;

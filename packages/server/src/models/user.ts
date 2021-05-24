import { model, Schema } from 'mongoose';
import { CollectionNames, UserTypes } from '../interfaces/enums';
import { IUser } from '../interfaces/IDocuments';

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
	phone: {
		type: String,
		unique: true,
		required: true,
	},
	address: {
		type: String,
	},
	userType: {
		type: String,
		enum: UserTypes,
		default: UserTypes.CUSTOMER,
	},
	isActivated: {
		type: Boolean,
		default: function () {
			const userType = (this as any)['userType'] || UserTypes.MANAGER;

			if (userType === UserTypes.MANAGER) {
				return false;
			} else if (userType === UserTypes.CUSTOMER) {
				return true;
			}

			return false;
		},
	},
});

export default model<IUser>(CollectionNames.USER, userSchema);

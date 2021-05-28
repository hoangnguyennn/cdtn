import { model, Schema } from 'mongoose';
import { IUser } from '../interfaces/IDocuments';
import { CollectionName, UserType } from '../interfaces/enums';

const userSchema = new Schema({
	email: {
		type: String,
		required: true,
		unique: true,
	},
	passwordHashed: {
		type: String,
		required: true,
	},
	fullName: {
		type: String,
		required: true,
	},
	address: {
		type: String,
		default: '',
	},
	phone: {
		type: String,
		required: true,
	},
	userType: {
		type: String,
		enum: UserType,
		default: UserType.CUSTOMER,
	},
	isActivated: {
		type: String,
		default: function () {
			const userType = (this as any)['userType'] || UserType.MANAGER;

			if (userType === UserType.CUSTOMER) {
				return true;
			}

			return false;
		},
	},
});

export default model<IUser>(CollectionName.USER, userSchema);

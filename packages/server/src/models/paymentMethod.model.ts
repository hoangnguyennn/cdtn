import { model, Schema } from 'mongoose';
import { CollectionNames } from '../interfaces/enums';
import { IPaymentMethod } from '../interfaces/IDocuments';

const paymentMethodSchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true,
	},
	imageUrl: {
		type: String,
		required: true,
	},
	accessKey: {
		type: String,
	},
	secretKey: {
		type: String,
	},
	publicKey: {
		type: String,
	},
	url: {
		type: String,
	},
	description: {
		type: String,
	},
});

export default model<IPaymentMethod>(
	CollectionNames.PAYMENT_METHOD,
	paymentMethodSchema
);

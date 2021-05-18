import { model, Schema, Types } from 'mongoose';
import { CollectionNames, ProductStatuses } from '../interfaces/enums';
import { IProduct } from '../interfaces/IDocuments';

const productSchema = new Schema<IProduct>({
	name: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	unit: {
		type: Types.ObjectId,
		ref: CollectionNames.PRODUCT_UNIT,
		required: true,
	},
	description: {
		type: String,
	},
	status: {
		type: String,
		enum: ProductStatuses,
		default: ProductStatuses.NOT_SELLING,
	},
});

export default model<IProduct>(CollectionNames.PRODUCT, productSchema);

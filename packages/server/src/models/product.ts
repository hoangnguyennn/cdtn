import { model, Schema, Types } from 'mongoose';
import { IProduct } from '../interfaces/IDocuments';
import { CollectionName, ProductStatus } from '../interfaces/enums';

const productSchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true,
	},
	price: {
		type: Number,
		required: true,
	},
	unitId: {
		type: Types.ObjectId,
		ref: CollectionName.PRODUCT_UNIT,
		required: true,
	},
	description: {
		type: String,
	},
	status: {
		type: String,
		enum: ProductStatus,
		required: true,
	},
	imagesId: [
		{
			type: Types.ObjectId,
			ref: CollectionName.IMAGE,
			required: true,
		},
	],
});

productSchema.virtual('unit', {
	ref: CollectionName.PRODUCT_UNIT,
	localField: 'unitId',
	foreignField: '_id',
	justOne: true,
});

productSchema.virtual('images', {
	ref: CollectionName.IMAGE,
	localField: 'imagesId',
	foreignField: '_id',
});

export default model<IProduct>(CollectionName.PRODUCT, productSchema);

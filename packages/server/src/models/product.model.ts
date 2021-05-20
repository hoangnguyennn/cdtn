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
	unitId: {
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
	imagesId: [
		{
			type: Types.ObjectId,
			ref: CollectionNames.PRODUCT_IMAGE,
			default: [],
		},
	],
});

productSchema.virtual('unit', {
	ref: CollectionNames.PRODUCT_UNIT,
	localField: 'unitId',
	foreignField: '_id',
	justOne: true,
});

productSchema.virtual('images', {
	ref: CollectionNames.PRODUCT_IMAGE,
	localField: 'imagesId',
	foreignField: '_id',
});

productSchema.set('toObject', { virtuals: true });
productSchema.set('toJSON', { virtuals: true });

export default model<IProduct>(CollectionNames.PRODUCT, productSchema);

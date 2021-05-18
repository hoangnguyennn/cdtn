import { model, Schema, Types } from 'mongoose';
import { CollectionNames } from '../interfaces/enums';
import { IProductImage } from '../interfaces/IDocuments';

const productImageSchema = new Schema<IProductImage>({
	productId: {
		type: Types.ObjectId,
		ref: CollectionNames.PRODUCT,
		required: true,
	},
	imageUrl: {
		type: String,
		required: true,
	},
});

export default model<IProductImage>(
	CollectionNames.PRODUCT_IMAGE,
	productImageSchema
);

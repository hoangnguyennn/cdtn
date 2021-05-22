import { model, Schema } from 'mongoose';
import { CollectionNames } from '../interfaces/enums';
import { IProductImage } from '../interfaces/IDocuments';

const productImageSchema = new Schema<IProductImage>({
	imageUrl: {
		type: String,
		required: true,
	},
});

export default model<IProductImage>(
	CollectionNames.PRODUCT_IMAGE,
	productImageSchema
);

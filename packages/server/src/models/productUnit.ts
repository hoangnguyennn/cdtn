import { model, Schema } from 'mongoose';
import { CollectionNames } from '../interfaces/enums';
import { IProductUnit } from '../interfaces/IDocuments';

const productUnitSchema = new Schema<IProductUnit>({
	name: {
		type: String,
		unique: true,
		required: true,
	},
});

export default model<IProductUnit>(
	CollectionNames.PRODUCT_UNIT,
	productUnitSchema
);

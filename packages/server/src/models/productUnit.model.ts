import { model, Schema } from 'mongoose';

import { IProductUnit } from '../interfaces';
import Names from '../constants/databaseCollectionNames';

const productUnitSchema = new Schema<IProductUnit>({
	name: {
		type: String,
		required: true,
	},
});

const ProductUnit = model<IProductUnit>(Names.PRODUCT_UNIT, productUnitSchema);
export default ProductUnit;

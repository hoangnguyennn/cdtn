import { model, Schema } from 'mongoose';

import Names from '../constants/databaseCollectionNames';

const productUnitSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const ProductUnit = model(Names.PRODUCT_UNIT, productUnitSchema);
export default ProductUnit;

import { model, Schema, Types } from 'mongoose';

import Names from '../constants/databaseCollectionNames';

const productSchema = new Schema({
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
    ref: Names.PRODUCT_UNIT,
    required: true,
  },
  description: String,
});

const Product = model(Names.PRODUCT, productSchema);
export default Product;

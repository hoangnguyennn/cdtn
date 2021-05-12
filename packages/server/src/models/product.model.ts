import { model, Schema, Types } from 'mongoose';

import { IProduct } from '../interfaces';
import { ProductStatuses } from '../interfaces/enums';
import Names from '../constants/databaseCollectionNames';

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
    ref: Names.PRODUCT_UNIT,
    required: true,
  },
  description: String,
  status: {
    type: String,
    enum: ProductStatuses,
    default: ProductStatuses.TRADING,
  },
});

const Product = model<IProduct>(Names.PRODUCT, productSchema);
export default Product;

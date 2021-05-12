import { model, Schema, Types } from 'mongoose';

import { ICart } from '../interfaces';
import Names from '../constants/databaseCollectionNames';

const cartSchema = new Schema<ICart>({
  userId: {
    type: Types.ObjectId,
    ref: Names.USER,
    required: true,
  },
  productId: {
    type: Types.ObjectId,
    ref: Names.PRODUCT,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
  },
  isBuyLater: {
    type: Boolean,
    default: false,
  },
  dateAddedToCart: {
    type: Date,
    default: new Date(),
  },
});

const Cart = model<ICart>(Names.CART, cartSchema);
export default Cart;

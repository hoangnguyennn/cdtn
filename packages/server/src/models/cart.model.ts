import { model, Schema, Types } from 'mongoose';

import Names from '../constants/databaseCollectionNames';

const cartSchema = new Schema({
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

const Cart = model(Names.CART, cartSchema);
export default Cart;

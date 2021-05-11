import { model, Schema, Types } from 'mongoose';

import Names from '../constants/databaseCollectionNames';

const orderItemSchema = new Schema({
  orderId: {
    type: Types.ObjectId,
    ref: Names.ORDER,
    required: true,
  },
  productId: {
    type: Types.ObjectId,
    ref: Names.PRODUCT,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
  },
});

const OrderItem = model(Names.ORDER_ITEM, orderItemSchema);
export default OrderItem;

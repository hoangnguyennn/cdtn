import { model, Schema, Types } from 'mongoose';

import Names from '../constants/databaseCollectionNames';
import { OrderStatuses, PaymentStatuses } from '../interfaces/enums';

const orderSchema = new Schema({
  userId: {
    type: Types.ObjectId,
    ref: Names.USER,
  },
  deliveryFullName: {
    type: String,
    required: true,
  },
  deliveryAddress: {
    type: String,
    required: true,
  },
  deliveryPhone: {
    type: String,
    required: true,
  },
  deliveryDate: {
    type: String,
    required: true,
  },
  paymentMethod: {
    type: Types.ObjectId,
    ref: Names.PAYMENT_METHOD,
    required: true,
  },
  paymentStatus: {
    type: String,
    enum: PaymentStatuses,
    required: true,
  },
  orderStatus: {
    type: String,
    enum: OrderStatuses,
    required: true,
  },
  orderDate: {
    type: Date,
    default: new Date(),
  },
});

const Order = model(Names.ORDER, orderSchema);
export default Order;

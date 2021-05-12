import { model, Schema } from 'mongoose';

import { IPaymentMethod } from '../interfaces';
import Names from '../constants/databaseCollectionNames';

const paymentMethodSchema = new Schema<IPaymentMethod>({
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  accessKey: {
    type: String,
  },
  secretKey: {
    type: String,
  },
  publicKey: {
    type: String,
  },
  apiUrl: {
    type: String,
  },
  description: {
    type: String,
  },
});

const PaymentMethod = model<IPaymentMethod>(
  Names.PAYMENT_METHOD,
  paymentMethodSchema
);
export default PaymentMethod;

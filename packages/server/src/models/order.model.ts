import { model, Schema, Types } from 'mongoose';

import { IOrder } from '../interfaces';
import { OrderStatuses, PaymentStatuses } from '../interfaces/enums';
import Names from '../constants/databaseCollectionNames';

const orderSchema = new Schema<IOrder>({
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
		type: Number,
		default: Date.now,
	},
});

const Order = model<IOrder>(Names.ORDER, orderSchema);
export default Order;

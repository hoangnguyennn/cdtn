import { model, Schema, Types } from 'mongoose';
import {
	CollectionNames,
	OrderStatuses,
	PaymentStatuses,
} from '../interfaces/enums';
import { IOrder } from '../interfaces/IDocuments';

const orderSchema = new Schema({
	userId: {
		type: Types.ObjectId,
		ref: CollectionNames.USER,
	},
	deliveryFullName: {
		type: String,
		required: true,
	},
	deliveryPhone: {
		type: String,
		required: true,
	},
	deliveryEmail: {
		type: String,
		required: true,
	},
	deliveryAddress: {
		type: String,
		required: true,
	},
	deliveryDate: {
		type: Date,
	},
	paymentMethodId: {
		type: Types.ObjectId,
		required: true,
		ref: CollectionNames.PAYMENT_METHOD,
	},
	paymentStatus: {
		type: String,
		required: true,
		enum: PaymentStatuses,
		default: PaymentStatuses.UNPAID,
	},
	orderDate: {
		type: Date,
		required: true,
		default: new Date(),
	},
	orderStatus: {
		type: String,
		required: true,
		enum: OrderStatuses,
		default: OrderStatuses.ORDERED,
	},
	orderItemsId: [
		{
			type: Types.ObjectId,
			ref: CollectionNames.ORDER_ITEM,
			default: [],
		},
	],
});

orderSchema.virtual('paymentMethod', {
	ref: CollectionNames.PAYMENT_METHOD,
	localField: 'paymentMethod',
	foreignField: '_id',
});

orderSchema.virtual('orderItems', {
	ref: CollectionNames.ORDER_ITEM,
	localField: 'orderItemsId',
	foreignField: '_id',
});

export default model<IOrder>('orders', orderSchema);

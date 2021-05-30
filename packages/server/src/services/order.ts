import { IOrder } from '../interfaces/IDocuments';
import { IOrderCreate } from '../interfaces';
import { PaymentStatus } from '../interfaces/enums';
import OrderModel from '../models/order';

const create = async (order: IOrderCreate): Promise<IOrder> => {
	const orderCreated = await OrderModel.create({
		userId: order.userId,
		deliveryFullName: order.deliveryFullName,
		deliveryAddress: order.deliveryAddress,
		deliveryPhone: order.deliveryPhone,
		deliveryEmail: order.deliveryEmail,
		deliveryDate: order.deliveryDate,
		paymentMethodId: order.paymentMethodId,
		paymentStatus: PaymentStatus.UNPAID,
		itemsId: order.itemsId,
	});

	return OrderModel.populate(orderCreated, [
		{ path: 'user' },
		{ path: 'paymentMethod' },
		{ path: 'items' },
	]);
};

const get = async (order: Partial<IOrder> = {}): Promise<IOrder[]> => {
	const orderFilter = Object.entries(order).reduce(
		(result: any, [key, value]) => {
			if (value) {
				result[key] = value;
			}
			return result;
		},
		{}
	);

	return OrderModel.find(orderFilter)
		.populate([
			{ path: 'user' },
			{ path: 'paymentMethod' },
			{ path: 'items', populate: { path: 'product' } },
		])
		.sort({ orderDate: -1 });
};

export default {
	create,
	get,
};

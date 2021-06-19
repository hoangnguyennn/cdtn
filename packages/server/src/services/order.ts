import { IOrder } from '../interfaces/IDocuments';
import { IOrderCreate } from '../interfaces';
import { PaymentStatus } from '../interfaces/enums';
import OrderModel from '../models/order';
import { removeInvalidFields } from '../utils';

const create = async (order: IOrderCreate): Promise<IOrder> => {
	const orderLint = removeInvalidFields({
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

	const orderCreated = await OrderModel.create(orderLint);

	return OrderModel.populate(orderCreated, [
		{ path: 'user' },
		{ path: 'paymentMethod' },
		{ path: 'items' },
	]);
};

const get = async (filter: any = {}): Promise<IOrder[]> => {
	const orderFilter: any = removeInvalidFields(filter);
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

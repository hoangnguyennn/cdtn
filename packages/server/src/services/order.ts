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

export default {
	create,
};

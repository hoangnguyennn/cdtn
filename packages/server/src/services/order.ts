import { IOrder } from '../interfaces/IDocuments';
import { IOrderCreate } from '../interfaces';
import OrderModel from '../models/order';

export const create = (order: IOrderCreate): Promise<IOrder> => {
	return OrderModel.create({
		userId: order.userId,
		deliveryFullName: order.deliveryFullName,
		deliveryPhone: order.deliveryPhone,
		deliveryAddress: order.deliveryAddress,
		deliveryEmail: order.deliveryEmail,
		paymentMethodId: order.paymentMethodId,
		orderItemsId: order.orderItemsId,
	});
};

export default {
	create,
};

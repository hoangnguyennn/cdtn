import { IOrderRequest } from '../interfaces';
import Order from '../models/order';

export const createNewOrderService = (order: IOrderRequest) => {
	return Order.create({
		userId: order.userId,
		deliveryFullName: order.deliveryFullName,
		deliveryPhone: order.deliveryPhone,
		deliveryAddress: order.deliveryAddress,
		deliveryEmail: order.deliveryEmail,
		paymentMethodId: order.paymentMethod,
	});
};

export default {
	createNewOrderService,
};

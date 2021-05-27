import { IOrder } from '../interfaces/IDocuments';
import { IOrderCreate } from '../interfaces';
import OrderModel from '../models/order';

const create = async (order: IOrderCreate): Promise<IOrder> => {
	return OrderModel.create({
		userId: order.userId,
		deliveryFullName: order.deliveryFullName,
		deliveryAddress: order.deliveryAddress,
		deliveryPhone: order.deliveryPhone,
		deliveryEmail: order.deliveryEmail,
		deliveryDate: order.deliveryDate,
		paymentMethodId: order.paymentMethodId,
		itemsId: order.itemsId,
	});
};

export default {
	create,
};

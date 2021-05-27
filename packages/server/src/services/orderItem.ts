import { IOrderItemCreate } from '../interfaces';
import { IOrderItem } from '../interfaces/IDocuments';
import OrderItemModel from '../models/orderItem';

const createMany = async (
	orderItems: IOrderItemCreate[]
): Promise<IOrderItem[]> => {
	const orderItemsCreate = orderItems.map((item) => ({
		productId: item.productId,
		qty: item.qty,
	}));

	return OrderItemModel.insertMany(orderItemsCreate);
};

export default {
	createMany,
};

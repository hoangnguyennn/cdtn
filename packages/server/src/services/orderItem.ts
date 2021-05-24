import { IOrderItem } from '../interfaces/IDocuments';
import { IOrderItemRequest } from '../interfaces';
import OrderItemModel from '../models/orderItem';

export const createMany = async (
	orderItems: IOrderItemRequest[]
): Promise<IOrderItem[]> => {
	return OrderItemModel.insertMany(
		orderItems.map((item) => ({
			productId: item.productId,
			price: 123,
			qty: item.qty,
		}))
	);
};

export default {
	createMany,
};

import { ICartItem } from '../interfaces';
import OrderItem from '../models/orderItem.model';

export const createManyOrderItemService = async (orderItems: ICartItem[]) => {
	return OrderItem.insertMany(
		orderItems.map((item) => ({
			productId: item.productId,
			price: 123,
			qty: item.qty,
		}))
	);
};

export default {
	createManyOrderItemService,
};

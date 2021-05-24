import { ICartItem } from '../interfaces';
import OrderItem from '../models/orderItem';

export const createMany = async (orderItems: ICartItem[]) => {
	return OrderItem.insertMany(
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

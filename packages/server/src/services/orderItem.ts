import { IOrderItemCreate } from '../interfaces';
import { IOrderItem } from '../interfaces/IDocuments';
import OrderItemModel from '../models/orderItem';

const createMany = async (
	orderItems: IOrderItemCreate[]
): Promise<IOrderItem[]> => {
	const orderItemsCreate = orderItems.map((item) => ({
		productId: item.productId,
		price: item.price,
		qty: item.qty,
	}));

	const orderItemsCreated = await OrderItemModel.insertMany(orderItemsCreate);
	return OrderItemModel.populate(orderItemsCreated, [{ path: 'product' }]);
};

export default {
	createMany,
};

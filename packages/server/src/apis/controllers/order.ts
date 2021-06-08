import { Request, Response } from 'express';

import { IOrderCreate, IOrderCreateRequest } from '../../interfaces';
import { mapOrderToResponse } from '../../helpers/mappingResponse';
import { success } from '../../helpers/commonResponse';
import OrderItemService from '../../services/orderItem';
import OrderService from '../../services/order';
import ProductService from '../../services/product';
import { UserType } from '../../interfaces/enums';
import { IOrder } from '../../interfaces/IDocuments';

const create = async (req: Request, res: Response) => {
	const orderCreateRequest: IOrderCreateRequest = req.body;

	const orderItemCreateRequest = orderCreateRequest.items;
	const productPromises = orderItemCreateRequest.map((item) =>
		ProductService.getById(item.productId)
	);
	const products = await Promise.all(productPromises);

	const orderItems = await OrderItemService.createMany(
		orderCreateRequest.items
			.filter((item) => item !== null)
			.map((item, index) => ({
				...item,
				price: products[index]?.price || 0,
			}))
	);

	const orderCreate: IOrderCreate = {
		...orderCreateRequest,
		itemsId: orderItems.map((item) => item._id),
	};

	const orderCreated = await OrderService.create(orderCreate);
	return success(res, mapOrderToResponse(orderCreated));
};

const get = async (req: Request, res: Response) => {
	const { userId, userType } = res.locals;

	const filter: Partial<IOrder> = {};
	if (userType === UserType.CUSTOMER) {
		filter.userId = userId;
	}

	const orders = await OrderService.get(filter);
	return success(res, orders.map(mapOrderToResponse));
};

export default {
	create,
	get,
};

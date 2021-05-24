import { Request, Response } from 'express';

import { IOrderCreate, IOrderRequest } from '../../interfaces';
import { success } from '../../helpers/commonResponse';
import OrderItemService from '../../services/orderItem';
import OrderService from '../../services/order';

export const create = async (req: Request, res: Response) => {
	const orderRequest: IOrderRequest = req.body;
	const orderItemsRequest = orderRequest.items;

	const orderItemsCreated = await OrderItemService.createMany(
		orderItemsRequest
	);

	const orderCreate: IOrderCreate = {
		...orderRequest,
		orderItemsId: orderItemsCreated.map((item) => item._id),
	};
	const orderCreated = await OrderService.create(orderCreate);

	return success(res, orderCreated);
};

export default {
	create,
};

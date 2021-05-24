import { Request, Response } from 'express';

import { IOrderRequest } from '../../interfaces';
import { success } from '../../helpers/commonResponse';
import OrderItemService from '../../services/orderItem';
import OrderService from '../../services/order';

export const create = async (req: Request, res: Response) => {
	const orderRequest: IOrderRequest = req.body;

	await OrderItemService.createMany(orderRequest.cart);
	const orderCreated = await OrderService.create(orderRequest);

	return success(res, orderCreated);
};

export default {
	create,
};

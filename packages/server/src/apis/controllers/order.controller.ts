import { Request, Response } from 'express';
import { success } from '../../helpers/commonResponse';
import { IOrderRequest } from '../../interfaces';

import OrderService from '../../services/order.service';
import OrderItemService from '../../services/orderItem.service';

export const createNewOrderController = async (req: Request, res: Response) => {
	const orderRequest: IOrderRequest = req.body;

	await OrderItemService.createManyOrderItemService(orderRequest.cart);
	const orderCreated = await OrderService.createNewOrderService(orderRequest);

	return success(res, orderCreated);
};

export default {
	createNewOrderController,
};

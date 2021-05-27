import { Request, Response } from 'express';

import { IOrderCreate, IOrderCreateRequest } from '../../interfaces';
import { mapOrderToResponse } from '../../helpers/mappingResponse';
import { success } from '../../helpers/commonResponse';
import OrderItemService from '../../services/orderItem';
import OrderService from '../../services/order';

const create = async (req: Request, res: Response) => {
	const orderCreateRequest: IOrderCreateRequest = req.body;

	const orderItems = await OrderItemService.createMany(
		orderCreateRequest.items
	);

	const orderCreate: IOrderCreate = {
		...orderCreateRequest,
		itemsId: orderItems.map((item) => item._id),
	};

	const orderCreated = await OrderService.create(orderCreate);
	return success(res, mapOrderToResponse(orderCreated));
};

export default {
	create,
};

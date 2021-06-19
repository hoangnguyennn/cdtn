import { Request, Response } from 'express';

import { IOrderCreate, IOrderCreateRequest } from '../../interfaces';
import { mapOrderToResponse } from '../../helpers/mappingResponse';
import { success } from '../../helpers/commonResponse';
import { PaymentStatus, UserType } from '../../interfaces/enums';
import mapQueryToMongoFilter from '../../helpers/mapQueryToMongoFilter';
import OrderItemService from '../../services/orderItem';
import OrderService from '../../services/order';
import ProductService from '../../services/product';

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
	const filter = mapQueryToMongoFilter(req.query);

	if (userType === UserType.CUSTOMER) {
		filter.userId = userId;
	}

	const orders = await OrderService.get(filter);
	return success(res, orders.map(mapOrderToResponse));
};

const updateOrderStatus = async (req: Request, res: Response) => {
	const { id } = req.params;
	const { status } = req.body;

	const orderUpdated = await OrderService.updateStatus(id, status);
	return success(res, mapOrderToResponse(orderUpdated));
};

const payOrder = async (req: Request, res: Response) => {
	const { id } = req.params;

	const orderUpdated = await OrderService.updatePaymentStatus(
		id,
		PaymentStatus.PAID
	);
	return success(res, mapOrderToResponse(orderUpdated));
};

export default {
	create,
	get,
	payOrder,
	updateOrderStatus,
};

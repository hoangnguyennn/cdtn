import { Request, Response } from 'express';
import { success } from '../../helpers/commonResponse';
import { PaymentStatus } from '../../interfaces/enums';
import OrderService from '../../services/order';
import { startOfDay, endOfDay } from '../../utils';

const statistic = async (req: Request, res: Response) => {
	const now = new Date();
	const startOfDate = startOfDay(now);
	const endOfDate = endOfDay(now);

	const ordersInDay = await OrderService.get({
		orderDate: { $gte: startOfDate, $lt: endOfDate },
		paymentStatus: PaymentStatus.UNPAID,
	});

	const revenueOfTheDay = ordersInDay.reduce((result, order) => {
		const orderTotal = order.items.reduce(
			(total, item) => total + item.price * item.qty,
			0
		);
		return result + orderTotal;
	}, 0);

	const numberOfOrders = ordersInDay.length;

	return success(res, {
		revenueOfTheDay,
		numberOfOrders,
	});
};

export default { statistic };

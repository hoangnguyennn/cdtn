import { Request, Response } from 'express';
import { success } from '../../helpers/commonResponse';
import { mapPaymentMethodToResponse } from '../../helpers/mappingResponse';
import PaymentMethod from '../../services/paymentMethod.service';

export const createNewPaymentMethodController = async (
	req: Request,
	res: Response
) => {
	const paymentMethod = req.body;

	const paymentMethodCreated =
		await PaymentMethod.createNewPaymentMethodService(paymentMethod);

	return success(res, paymentMethodCreated);
};

export const getPaymentMethodsController = async (
	req: Request,
	res: Response
) => {
	const paymentMethods = await PaymentMethod.getPaymentMethodsService();

	return success(res, paymentMethods.map(mapPaymentMethodToResponse));
};

export default {
	createNewPaymentMethodController,
	getPaymentMethodsController,
};

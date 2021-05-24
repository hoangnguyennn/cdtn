import { Request, Response } from 'express';

import { mapPaymentMethodToResponse } from '../../helpers/mappingResponse';
import { success } from '../../helpers/commonResponse';
import PaymentMethodService from '../../services/paymentMethod';

export const create = async (req: Request, res: Response) => {
	const paymentMethod = req.body;

	const paymentMethodCreated = await PaymentMethodService.create(paymentMethod);
	return success(res, paymentMethodCreated);
};

export const get = async (req: Request, res: Response) => {
	const paymentMethods = await PaymentMethodService.get();
	return success(res, paymentMethods.map(mapPaymentMethodToResponse));
};

export default {
	create,
	get,
};

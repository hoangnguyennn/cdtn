import { IPaymentMethod } from '../interfaces/IDocuments';
import PaymentMethod from '../models/paymentMethod';

export const create = (
	paymentMethod: IPaymentMethod
): Promise<IPaymentMethod> => {
	return PaymentMethod.create({
		name: paymentMethod.name,
		imageUrl: paymentMethod.imageUrl,
		accessKey: paymentMethod.accessKey,
		secretKey: paymentMethod.secretKey,
		publicKey: paymentMethod.publicKey,
		url: paymentMethod.url,
		description: paymentMethod.description,
	});
};

export const get = async (): Promise<IPaymentMethod[]> => {
	return PaymentMethod.find();
};

export default {
	create,
	get,
};

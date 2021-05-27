import { IPaymentMethod } from '../interfaces/IDocuments';
import { IPaymentMethodCreate } from '../interfaces';
import PaymentMethodModel from '../models/paymentMethod';

const create = async (
	paymentMethod: IPaymentMethodCreate
): Promise<IPaymentMethod> => {
	return PaymentMethodModel.create({
		name: paymentMethod.name,
		imageUrl: paymentMethod.imageUrl,
		accessKey: paymentMethod.accessKey,
		secretKey: paymentMethod.secretKey,
		publicKey: paymentMethod.publicKey,
		host: paymentMethod.host,
		description: paymentMethod.description,
	});
};

const get = async (): Promise<IPaymentMethod[]> => {
	return PaymentMethodModel.find();
};

export default {
	create,
	get,
};

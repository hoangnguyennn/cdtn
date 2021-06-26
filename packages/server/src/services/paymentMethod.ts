import { IPaymentMethod } from '../interfaces/IDocuments';
import { IPaymentMethodCreate } from '../interfaces';
import PaymentMethodModel from '../models/paymentMethod';
import { removeInvalidFields } from '../utils';

const create = async (
  paymentMethod: IPaymentMethodCreate
): Promise<IPaymentMethod> => {
  const paymentLint = removeInvalidFields({
    name: paymentMethod.name,
    imageUrl: paymentMethod.imageUrl,
    accessKey: paymentMethod.accessKey,
    secretKey: paymentMethod.secretKey,
    publicKey: paymentMethod.publicKey,
    host: paymentMethod.host,
    description: paymentMethod.description
  });

  return PaymentMethodModel.create(paymentLint);
};

const get = async (): Promise<IPaymentMethod[]> => {
  return PaymentMethodModel.find();
};

export default {
  create,
  get
};

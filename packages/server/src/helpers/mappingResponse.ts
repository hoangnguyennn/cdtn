import {
	IPaymentMethodResponse,
	IProductResponse,
	IUserResponse,
} from '../interfaces';
import { IPaymentMethod, IProduct, IUser } from '../interfaces/IDocuments';

export const mapUserToResponse = (user: IUser): IUserResponse => {
	return {
		id: user._id,
		email: user.email,
		fullName: user.fullName,
		phone: user.phone,
		address: user.address,
	};
};

export const mapProductToResponse = (product: IProduct): IProductResponse => {
	return {
		id: product._id,
		name: product.name,
		price: product.price,
		unit: product.unit?.name || '',
		description: product.description,
		status: product.status,
		images: product.images?.map((image) => image.imageUrl) || [],
	};
};

export const mapPaymentMethodToResponse = (
	paymentMethod: IPaymentMethod
): IPaymentMethodResponse => {
	return {
		id: paymentMethod._id,
		name: paymentMethod.name,
		imageUrl: paymentMethod.imageUrl,
	};
};

import {
	IImageResponse,
	IOrderItemResponse,
	IOrderResponse,
	IPaymentMethodResponse,
	IProductResponse,
	IProductResponseForAdmin,
	IProductUnitResponse,
	IUserResponse,
} from '../interfaces';
import {
	IImage,
	IOrder,
	IOrderItem,
	IPaymentMethod,
	IProduct,
	IProductUnit,
	IUser,
} from '../interfaces/IDocuments';

export const mapImageToResponse = (image: IImage): IImageResponse => {
	return {
		id: image._id,
		url: image.url,
		publicId: image.publicId,
	};
};

export const mapOrderToResponse = (order: IOrder): IOrderResponse => {
	return {
		id: order._id,
		deliveryFullName: order.deliveryFullName,
		deliveryAddress: order.deliveryAddress,
		deliveryPhone: order.deliveryPhone,
		deliveryEmail: order.deliveryEmail,
		deliveryDate: order.deliveryDate,
		paymentStatus: order.paymentStatus,
		orderStatus: order.orderStatus,
		orderDate: order.orderDate,

		user: order.user ? mapUserToResponse(order.user) : undefined,
		paymentMethod: mapPaymentMethodToResponse(
			order.paymentMethod as IPaymentMethod
		),
		items: order.items.map(mapOrderItemToResponse),
	};
};

export const mapOrderItemToResponse = (
	orderItem: IOrderItem
): IOrderItemResponse => {
	return {
		id: orderItem.id,
		productId: orderItem.productId,
		price: orderItem.price,
		qty: orderItem.qty,
		product: {
			name: orderItem.product?.name || '',
		},
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

export const mapProductToResponse = (product: IProduct): IProductResponse => {
	return {
		id: product._id,
		name: product.name,
		price: product.price,
		description: product.description,
		unit: product.unit?.name || '',
		images: product.images?.map((image) => image.url) || [],
		status: product.status,
	};
};

export const mapProductToResponseForAdmin = (
	product: IProduct
): IProductResponseForAdmin => {
	return {
		id: product._id,
		name: product.name,
		price: product.price,
		description: product.description,
		unit: product.unit ? mapProductUnitToResponse(product.unit) : undefined,
		images: product.images?.map(mapImageToResponse),
		status: product.status,
	};
};

export const mapProductUnitToResponse = (
	productUnit: IProductUnit
): IProductUnitResponse => {
	return {
		id: productUnit._id,
		name: productUnit.name,
		description: '',
	};
};

export const mapUserToResponse = (user: IUser): IUserResponse => {
	return {
		id: user.id,
		email: user.email,
		fullName: user.fullName,
		address: user.address,
		phone: user.phone,
		userType: user.userType,
	};
};

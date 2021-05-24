export enum CollectionNames {
	IMAGE = 'images',
	ORDER = 'orders',
	ORDER_ITEM = 'orderItems',
	PAYMENT_METHOD = 'paymentMethod',
	PRODUCT = 'products',
	PRODUCT_UNIT = 'productUnits',
	USER = 'users',
}

export enum OrderStatuses {
	CANCEL = 'CANCEL',
	DELIVERED = 'DELIVERED',
	DELIVERING = 'DELIVERING',
	ORDERED = 'ORDERED',
	VERIFIED = 'VERIFIED',
}

export enum PaymentStatuses {
	PAID = 'PAID',
	UNPAID = 'UNPAID',
}

export enum ProductStatuses {
	NOT_SELLING = 'NOT_SELLING',
	SELLING = 'SELLING',
}

export enum UserTypes {
	ADMIN = 'ADMIN',
	CUSTOMER = 'CUSTOMER',
	MANAGER = 'MANAGER',
}

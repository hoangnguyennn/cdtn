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
	ORDERED = 'ORDERED',
	VERIFIED = 'VERIFIED',
	DELIVERING = 'DELIVERING',
	DELIVERED = 'DELIVERED',
	CANCEL = 'CANCEL',
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
	MANAGER = 'MANAGER',
	CUSTOMER = 'CUSTOMER',
}

export enum UserTypes {
	ADMIN = 'ADMIN',
	MANAGER = 'MANAGER',
	CUSTOMER = 'CUSTOMER',
}

export enum PaymentStatuses {
	UNPAID = 'UNPAID',
	PAID = 'PAID',
}

export enum OrderStatuses {
	ORDERED = 'ORDERED',
	CANCELED = 'CANCELED',
	DELIVERED_SUCCESSFULLY = 'DELIVERED_SUCCESSFULLY',
}

export enum Actions {
	CREATE = 'CREATE',
	UPDATE = 'UPDATE',
	DELETE = 'DELETE',
}
export enum ProductStatuses {
	STOPPED_TRADING = 'STOPPED_TRADING',
	TRADING = 'TRADING',
}

export enum HttpStatusCode {
	HTTP_200 = 200,
	HTTP_400 = 400,
	HTTP_401 = 401,
	HTTP_403 = 403,
	HTTP_404 = 404,
	HTTP_500 = 500,
}

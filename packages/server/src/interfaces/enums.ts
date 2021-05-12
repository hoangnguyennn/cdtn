export enum UserTypes {
  ADMIN,
  MANAGER,
  CUSTOMER,
}

export enum PaymentStatuses {
  UNPAID,
  PAID,
}

export enum OrderStatuses {
  ORDERED,
  CANCELED,
  DELIVERED_SUCCESSFULLY,
}

export enum Actions {
  CREATE,
  UPDATE,
  DELETE,
}
export enum ProductStatuses {
  STOPPED_TRADING,
  TRADING,
}

export enum HttpStatusCode {
  HTTP_200 = 200,
  HTTP_400 = 400,
  HTTP_401 = 401,
  HTTP_403 = 403,
  HTTP_404 = 404,
  HTTP_500 = 500,
}

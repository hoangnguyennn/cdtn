import { Types, Document } from 'mongoose';
import {
  Actions,
  HttpStatusCode,
  OrderStatuses,
  PaymentStatuses,
  ProductStatuses,
  UserTypes,
} from './enums';
import DatabaseCollectionNames from '../constants/databaseCollectionNames';
import { NextFunction, Request, Response } from 'express';

interface IServiceCommonResponse {
  hasError: boolean;
  httpStatusCode: HttpStatusCode;
}

export interface IServiceSuccessful<T> extends IServiceCommonResponse {
  data: T;
  message?: never;
}

export interface IServiceFailed extends IServiceCommonResponse {
  data?: never;
  message: string;
}

export type IServiceResponse<T = any> = IServiceSuccessful<T> | IServiceFailed;

export interface IServerResponse<T = undefined> {
  data?: T;
  message?: string;
}

export interface ICart extends Document {
  userId: Types.ObjectId;
  productId: Types.ObjectId;
  qty: number;
  isBuyLater: boolean;
  dateAddedToCart: Date;
}

export interface ILog extends Document {
  actor: Types.ObjectId;
  action: Actions;
  victim: typeof DatabaseCollectionNames;
  description?: string;
}

export interface IOrder extends Document {
  userId?: Types.ObjectId;
  deliveryFullName: string;
  deliveryAddress: string;
  deliveryPhone: string;
  deliveryDate: string;
  paymentMethod: Types.ObjectId;
  paymentStatus: PaymentStatuses;
  orderStatus: OrderStatuses;
  orderDate: Date;
}

export interface IOrderItem extends Document {
  orderId: Types.ObjectId;
  productId: Types.ObjectId;
  price: number;
  qty: number;
}

export interface IPaymentMethod extends Document {
  name: string;
  imageUrl: string;
  accessKey?: string;
  secretKey?: string;
  publicKey?: string;
  apiUrl?: string;
  description?: string;
}

export interface IProduct extends Document {
  name: string;
  price: number;
  unit: Types.ObjectId;
  description?: string;
  status: ProductStatuses;
}

export interface IProductUnit extends Document {
  name: string;
}

export interface IUser extends Document {
  email: string;
  passwordHashed: string;
  fullName: string;
  address: string;
  phone: string;
  userType: UserTypes;
}

export interface AsyncFunction<T = any> {
  (req: Request, res: Response, next?: NextFunction): Promise<T>;
}

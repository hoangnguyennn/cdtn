import { IUserResponse } from './index';

export interface IAuth {
	token: string;
	user: IUserResponse;
	message: string;
	hasError: boolean;
}

export interface IRootState {
	auth: IAuth;
}

import { combineReducers } from '@reduxjs/toolkit';

import { IRootState } from '../../interfaces/IState';
import appReducer from './app';
import authReducer from './auth';
import cartReducer from './cart';
import orderReducer from './order';
import paymentMethodReducer from './paymentMethod';
import productReducer from './product';

export default combineReducers<IRootState>({
	app: appReducer,
	auth: authReducer,
	cart: cartReducer,
	order: orderReducer,
	paymentMethod: paymentMethodReducer,
	product: productReducer,
});

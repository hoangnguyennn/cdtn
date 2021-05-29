import { combineReducers } from '@reduxjs/toolkit';
import appReducer from './app';
import authReducer from './auth';
import cartReducer from './cart';
import paymentMethodReducer from './paymentMethod';
import productReducer from './product';

export default combineReducers({
	app: appReducer,
	auth: authReducer,
	cart: cartReducer,
	paymentMethod: paymentMethodReducer,
	product: productReducer,
});

import { combineReducers } from '@reduxjs/toolkit';
import appReducer from './app.reducer';
import authReducer from './auth.reducer';
import cartReducer from './cart.reducer';
import paymentMethodReducer from './paymentMethods.reducer';
import productReducer from './product.reducer';

export default combineReducers({
	app: appReducer,
	auth: authReducer,
	cart: cartReducer,
	paymentMethod: paymentMethodReducer,
	product: productReducer,
});

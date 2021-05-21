import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './auth.reducer';
import cartReducer from './cart.reducer';
import productReducer from './product.reducer';

export default combineReducers({
	auth: authReducer,
	cart: cartReducer,
	product: productReducer,
});

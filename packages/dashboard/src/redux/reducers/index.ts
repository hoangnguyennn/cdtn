import { combineReducers } from '@reduxjs/toolkit';
import { IRootState } from '../../interfaces/IState';

import authReducer from './auth';
import orderReducer from './order';
import productReducer from './product';
import productUnitReducer from './productUnit';

export default combineReducers<IRootState>({
	auth: authReducer,
	order: orderReducer,
	product: productReducer,
	productUnit: productUnitReducer,
});

import { combineReducers } from '@reduxjs/toolkit';
import { IRootState } from '../../interfaces/IState';

import appReducer from './app';
import authReducer from './auth';
import categoryReducer from './category';
import orderReducer from './order';
import productReducer from './product';
import productUnitReducer from './productUnit';

export default combineReducers<IRootState>({
	app: appReducer,
	auth: authReducer,
	category: categoryReducer,
	order: orderReducer,
	product: productReducer,
	productUnit: productUnitReducer,
});

import { combineReducers } from '@reduxjs/toolkit';
import { IRootState } from '../../interfaces/IState';

import authReducer from './auth';
import productReducer from './product';

export default combineReducers<IRootState>({
	auth: authReducer,
	product: productReducer,
});

import { combineReducers } from '@reduxjs/toolkit';

import productReducer from './product.reducer';

export default combineReducers({
	product: productReducer,
});

import { combineReducers } from '@reduxjs/toolkit';

import productReducer from './product';

export default combineReducers({
	product: productReducer,
});

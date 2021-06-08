import { createSelector, createSlice, Dispatch } from '@reduxjs/toolkit';
import { fetchOrders } from '../../apis/common';
import { IOrderState, IRootState } from '../../interfaces/IState';

const initialState: IOrderState = {
	orders: [],
};

const orderSlice = createSlice({
	name: 'orders',
	initialState,
	reducers: {
		addOrders(state, action) {
			state.orders = action.payload;
		},
	},
});

const { addOrders } = orderSlice.actions;

export const getOrdersAction = () => async (dispatch: Dispatch) => {
	return fetchOrders().then((orders) => dispatch(addOrders(orders)));
};

const orderState = (state: IRootState) => state.order;
const selector = function <T>(combiner: { (state: IOrderState): T }) {
	return createSelector(orderState, combiner);
};

export const getOrders = () => selector((state) => state.orders);

export default orderSlice.reducer;

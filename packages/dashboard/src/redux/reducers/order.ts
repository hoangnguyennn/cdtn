import { createSelector, createSlice, Dispatch } from '@reduxjs/toolkit';
import { fetchOrders, fetchOrdersUnProcessed } from '../../apis/common';
import { IOrderState, IRootState } from '../../interfaces/IState';

const initialState: IOrderState = {
	orders: [],
	ordersUnProcessed: [],
};

const orderSlice = createSlice({
	name: 'orders',
	initialState,
	reducers: {
		addOrders(state, action) {
			state.orders = action.payload;
		},
		addOrdersUnProcessed(state, action) {
			state.ordersUnProcessed = action.payload;
		},
	},
});

const { addOrders, addOrdersUnProcessed } = orderSlice.actions;

export const getOrdersAction = () => async (dispatch: Dispatch) => {
	return fetchOrders().then((orders) => dispatch(addOrders(orders)));
};

export const getOrdersUnProcessedAction = () => async (dispatch: Dispatch) => {
	return fetchOrdersUnProcessed().then((orders) =>
		dispatch(addOrdersUnProcessed(orders))
	);
};

const orderState = (state: IRootState) => state.order;
const selector = function <T>(combiner: { (state: IOrderState): T }) {
	return createSelector(orderState, combiner);
};

export const getOrders = () => selector((state) => state.orders);
export const getOrdersUnProcessed = () =>
	selector((state) => state.ordersUnProcessed);

export default orderSlice.reducer;

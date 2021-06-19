import { createSelector, createSlice, Dispatch } from '@reduxjs/toolkit';
import {
	fetchOrders,
	fetchOrdersUnProcessed,
	updateOrderStatus,
} from '../../apis/common';
import { IOrder } from '../../interfaces';
import { OrderStatus } from '../../interfaces/enum';
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
		updateOrder(state, action) {
			const order: IOrder = action.payload;
			const index = state.orders.findIndex((item) => item.id === order.id);

			if (index === -1) {
				state.orders = [...state.orders, order];
			} else {
				state.orders = [
					...state.orders.slice(0, index),
					order,
					...state.orders.slice(index + 1),
				];
			}
		},
	},
});

const { addOrders, addOrdersUnProcessed, updateOrder } = orderSlice.actions;

export const getOrdersAction = () => async (dispatch: Dispatch) => {
	return fetchOrders().then((orders) => dispatch(addOrders(orders)));
};

export const getOrdersUnProcessedAction = () => async (dispatch: Dispatch) => {
	return fetchOrdersUnProcessed().then((orders) =>
		dispatch(addOrdersUnProcessed(orders))
	);
};

export const updateOrderStatusAction =
	(id: string, status: OrderStatus) => async (dispatch: Dispatch) => {
		return updateOrderStatus(id, status).then((orderUpdated) => {
			dispatch(updateOrder(orderUpdated));
		});
	};

const orderState = (state: IRootState) => state.order;
const selector = function <T>(combiner: { (state: IOrderState): T }) {
	return createSelector(orderState, combiner);
};

export const getOrders = () => selector((state) => state.orders);
export const getOrdersUnProcessed = () =>
	selector((state) => state.ordersUnProcessed);

export default orderSlice.reducer;

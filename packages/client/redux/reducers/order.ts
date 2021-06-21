import { createSelector, createSlice, Dispatch } from '@reduxjs/toolkit';
import { fetchOrders } from '../../apis/order.api';
import { IOrderState, IRootState } from '../../interfaces/IState';

export const initialState: IOrderState = {
	orders: [],
};

const orderSlice = createSlice({
	name: 'order',
	initialState,
	reducers: {
		setOrdersAction(state, action) {
			state.orders = action.payload;
		},
	},
});

const { setOrdersAction } = orderSlice.actions;

const getOrdersAction = () => async (dispatch: Dispatch) => {
	const token = localStorage.getItem('access-token');
	if (!token) {
		console.log('token not found');
		return;
	}

	return fetchOrders(token).then((orders) => {
		dispatch(setOrdersAction(orders));
	});
};

export { getOrdersAction };

const orderState = (state: IRootState) => state.order;
const selector = function <T>(combiner: { (state: IOrderState): T }) {
	return createSelector(orderState, combiner);
};

export const getOrders = () => selector((state) => state.orders);
export const getOrderById = (id: string) =>
	selector((state) => state.orders.find((item) => item.id === id));

export default orderSlice.reducer;

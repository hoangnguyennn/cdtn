import { createSelector, createSlice, Dispatch } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { get } from '../../apis/order.api';
import { IOrderState, IRootState } from '../../interfaces/IState';

export const initialState: IOrderState = {
	orders: [],
};

const orderSlice = createSlice({
	name: 'order',
	initialState,
	reducers: {
		setOrders(state, action) {
			state.orders = action.payload;
		},
	},
});

const { setOrders } = orderSlice.actions;

const fetchOrders = () => async (dispatch: Dispatch) => {
	const token = localStorage.getItem('access-token');
	if (!token) {
		console.log('token not found');
		return;
	}

	return get(token)
		.then((orders) => {
			dispatch(setOrders(orders));
		})
		.catch((err) => {
			toast.error(err.message);
			throw err;
		});
};

export { fetchOrders };

const orderState = (state: IRootState) => state.order;
const selector = function <T>(combiner: { (state: IOrderState): T }) {
	return createSelector(orderState, combiner);
};

export const getOrders = () => selector((state) => state.orders);

export default orderSlice.reducer;

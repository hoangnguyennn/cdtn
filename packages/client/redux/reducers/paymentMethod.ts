import { createSelector, createSlice, Dispatch } from '@reduxjs/toolkit';

import { fetchPaymentMethods } from '../../apis/paymentMethod.api';
import { IPaymentMethodState, IRootState } from '../../interfaces/IState';

export const initialState: IPaymentMethodState = {
	paymentMethods: [],
};

const paymentMethodSlice = createSlice({
	name: 'paymentMethod',
	initialState,
	reducers: {
		setPaymentMethods: (state, action) => {
			state.paymentMethods = action.payload;
		},
	},
});

const { setPaymentMethods } = paymentMethodSlice.actions;

const fetchPaymentMethodsAction = () => async (dispatch: Dispatch) => {
	return fetchPaymentMethods().then((paymentMethods) => {
		dispatch(setPaymentMethods(paymentMethods));
	});
};

export { fetchPaymentMethodsAction };

const paymentMethodState = (state: IRootState) => state.paymentMethod;
const selector = function <T>(combiner: { (state: IPaymentMethodState): T }) {
	return createSelector(paymentMethodState, combiner);
};

export const getPaymentMethods = () =>
	selector((state) => state.paymentMethods);

export default paymentMethodSlice.reducer;

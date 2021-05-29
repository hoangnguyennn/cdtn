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
	try {
		const paymentMethods = await fetchPaymentMethods();
		dispatch(setPaymentMethods(paymentMethods));
	} catch {
		console.log('have err');
	}
};

export { fetchPaymentMethodsAction };

const paymentMethodState = (state: IRootState) => state.paymentMethod;
const selector = function <T>(combiner: { (state: IPaymentMethodState): T }) {
	return createSelector(paymentMethodState, combiner);
};

export const getPaymentMethods = selector((state) => state.paymentMethods);

export default paymentMethodSlice.reducer;

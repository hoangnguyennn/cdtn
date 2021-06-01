import { createSelector, createSlice, Dispatch } from '@reduxjs/toolkit';
import { fetchProductUnits } from '../../apis/common';
import { IProductUnitState, IRootState } from '../../interfaces/IState';

const initialState: IProductUnitState = {
	productUnits: [],
};

const productUnitSlice = createSlice({
	name: 'productUnit',
	initialState,
	reducers: {
		setProductUnits(state, action) {
			state.productUnits = action.payload;
		},
	},
});

const { setProductUnits } = productUnitSlice.actions;

const fetchProductUnitsAction = () => async (dispatch: Dispatch) => {
	try {
		const productUnits = await fetchProductUnits();
		dispatch(setProductUnits(productUnits));
	} catch (err) {
		console.log(err);
	}
};

export { fetchProductUnitsAction };

const productUnitState = (state: IRootState) => state.productUnit;
const selector = function <T>(combiner: { (state: IProductUnitState): T }) {
	return createSelector(productUnitState, combiner);
};

export const getProductUnits = selector((state) => state.productUnits);

export default productUnitSlice.reducer;

import { createSelector, createSlice, Dispatch } from '@reduxjs/toolkit';
import { createProductUnit, fetchProductUnits } from '../../apis/common';
import { IProductUnitCreate } from '../../interfaces';
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
		addProductUnit(state, action) {
			const productUnit = action.payload;
			state.productUnits = [productUnit, ...state.productUnits];
		},
	},
});

const { addProductUnit, setProductUnits } = productUnitSlice.actions;

const createProductUnitAction =
	(productUnit: IProductUnitCreate) => async (dispatch: Dispatch) => {
		try {
			const newProductUnit = await createProductUnit(productUnit);
			dispatch(addProductUnit(newProductUnit));
		} catch (err) {
			console.log(err);
		}
	};

const fetchProductUnitsAction = () => async (dispatch: Dispatch) => {
	try {
		const productUnits = await fetchProductUnits();
		dispatch(setProductUnits(productUnits));
	} catch (err) {
		console.log(err);
	}
};

export { createProductUnitAction, fetchProductUnitsAction };

const productUnitState = (state: IRootState) => state.productUnit;
const selector = function <T>(combiner: { (state: IProductUnitState): T }) {
	return createSelector(productUnitState, combiner);
};

export const getProductUnits = selector((state) => state.productUnits);

export default productUnitSlice.reducer;

import { createSelector, createSlice, Dispatch } from '@reduxjs/toolkit';
import { fetchProducts } from '../../apis/common';
import { IProductState, IRootState } from '../../interfaces/IState';

const initialState = {
	products: [],
};

const productSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		setProducts(state, action) {
			state.products = action.payload;
		},
	},
});

const { setProducts } = productSlice.actions;

const getProductsAction = () => async (dispatch: Dispatch) => {
	try {
		const products = await fetchProducts();
		dispatch(setProducts(products));
	} catch (err) {
		console.log(err);
	}
};

const productState = (state: IRootState) => state.product;
const selector = function <T>(combiner: { (state: IProductState): T }) {
	return createSelector(productState, combiner);
};

export const getProducts = selector((state) => state.products);

export { getProductsAction };

export default productSlice.reducer;

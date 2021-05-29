import { createSelector, createSlice, Dispatch } from '@reduxjs/toolkit';

import {
	fetchProductById,
	fetchTrendingProducts,
} from '../../apis/product.api';
import { IProductState, IRootState } from '../../interfaces/IState';

export const initialState: IProductState = {
	trendingProducts: [],
	product: {
		id: '',
		name: '',
		price: 0,
		description: '',
		unit: '',
		images: [],
	},
};

const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		setTrendingProducts: (state, action) => {
			state.trendingProducts = action.payload;
		},

		setProduct: (state, action) => {
			state.product = action.payload;
		},
	},
});

const { setTrendingProducts, setProduct } = productSlice.actions;

const fetchTrendingProductsAction = () => async (dispatch: Dispatch) => {
	try {
		const trendingProducts = await fetchTrendingProducts();
		return dispatch(setTrendingProducts(trendingProducts));
	} catch (err) {
		console.log(err);
	}
};

const fetchProductByIdAction = (id: string) => async (dispatch: Dispatch) => {
	try {
		const product = await fetchProductById(id);
		dispatch(setProduct(product));
	} catch (err) {
		console.log(err);
	}
};

export { fetchTrendingProductsAction, fetchProductByIdAction };

const productState = (state: IRootState) => state.product;
const selector = function <T>(combiner: { (state: IProductState): T }) {
	return createSelector(productState, combiner);
};

export const getTrendingProducts = selector((state) => state.trendingProducts);
export const getProduct = selector((state) => state.product);

export default productSlice.reducer;

import { createSelector, createSlice, Dispatch } from '@reduxjs/toolkit';

import {
	fetchProductById,
	fetchProducts,
	fetchTrendingProducts,
} from '../../apis/product.api';
import { IProductState, IRootState } from '../../interfaces/IState';

export const initialState: IProductState = {
	products: [],
	trendingProducts: [],
	product: {
		id: '',
		name: '',
		price: 0,
		description: '',
		unit: '',
		images: [],
		status: null,
	},
};

const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		setTrendingProductsAction: (state, action) => {
			state.trendingProducts = action.payload;
		},

		setProductAction: (state, action) => {
			state.product = action.payload;
		},

		setProductsAction: (state, action) => {
			state.products = action.payload;
		},
	},
});

const { setTrendingProductsAction, setProductAction, setProductsAction } =
	productSlice.actions;

const getProductsAction = (query: any) => async (dispatch: Dispatch) => {
	return fetchProducts(query).then((products) => {
		return dispatch(setProductsAction(products));
	});
};

const getTrendingProductsAction = () => async (dispatch: Dispatch) => {
	return fetchTrendingProducts().then((trendingProducts) => {
		return dispatch(setTrendingProductsAction(trendingProducts));
	});
};

const gethProductByIdAction = (id: string) => async (dispatch: Dispatch) => {
	return fetchProductById(id).then((product) => {
		dispatch(setProductAction(product));
	});
};

export { gethProductByIdAction, getProductsAction, getTrendingProductsAction };

const productState = (state: IRootState) => state.product;
const selector = function <T>(combiner: { (state: IProductState): T }) {
	return createSelector(productState, combiner);
};

export const getProduct = () => selector((state) => state.product);
export const getProducts = () => selector((state) => state.products);
export const getTrendingProducts = () =>
	selector((state) => state.trendingProducts);

export default productSlice.reducer;

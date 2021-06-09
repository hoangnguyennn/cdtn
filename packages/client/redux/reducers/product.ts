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
		setTrendingProducts: (state, action) => {
			state.trendingProducts = action.payload;
		},

		setProduct: (state, action) => {
			state.product = action.payload;
		},

		setProducts: (state, action) => {
			state.products = action.payload;
		},
	},
});

const { setTrendingProducts, setProduct, setProducts } = productSlice.actions;

const fetchProductsAction = (query: any) => async (dispatch: Dispatch) => {
	return fetchProducts(query).then((products) => {
		return dispatch(setProducts(products));
	});
};

const fetchTrendingProductsAction = () => async (dispatch: Dispatch) => {
	return fetchTrendingProducts().then((trendingProducts) => {
		return dispatch(setTrendingProducts(trendingProducts));
	});
};

const fetchProductByIdAction = (id: string) => async (dispatch: Dispatch) => {
	return fetchProductById(id).then((product) => {
		dispatch(setProduct(product));
	});
};

export {
	fetchProductByIdAction,
	fetchProductsAction,
	fetchTrendingProductsAction,
};

const productState = (state: IRootState) => state.product;
const selector = function <T>(combiner: { (state: IProductState): T }) {
	return createSelector(productState, combiner);
};

export const getProduct = () => selector((state) => state.product);
export const getProducts = () => selector((state) => state.products);
export const getTrendingProducts = () =>
	selector((state) => state.trendingProducts);

export default productSlice.reducer;

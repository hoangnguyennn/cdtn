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
	try {
		const products = await fetchProducts(query);
		return dispatch(setProducts(products));
	} catch (err) {
		console.log(err);
		throw err;
	}
};

const fetchTrendingProductsAction = () => async (dispatch: Dispatch) => {
	try {
		const trendingProducts = await fetchTrendingProducts();
		return dispatch(setTrendingProducts(trendingProducts));
	} catch (err) {
		console.log(err);
		throw err;
	}
};

const fetchProductByIdAction = (id: string) => async (dispatch: Dispatch) => {
	try {
		const product = await fetchProductById(id);
		dispatch(setProduct(product));
	} catch (err) {
		console.log(err);
		throw err;
	}
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

export const getProduct = selector((state) => state.product);
export const getProducts = selector((state) => state.products);
export const getTrendingProducts = selector((state) => state.trendingProducts);

export default productSlice.reducer;

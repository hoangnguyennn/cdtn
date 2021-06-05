import { createSelector, createSlice, Dispatch } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
	createProduct,
	fetchProductById,
	fetchProducts,
	updateProduct,
} from '../../apis/common';
import { IProduct, IProductCreate } from '../../interfaces';
import { IProductState, IRootState } from '../../interfaces/IState';

const initialState: IProductState = {
	products: [],
};

const productSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		setProducts(state, action) {
			state.products = action.payload;
		},
		addProduct(state, action) {
			const product: IProduct = action.payload;
			const index = state.products.findIndex((item) => item.id === product.id);

			if (index === -1) {
				state.products = [product, ...state.products];
			} else {
				state.products = [
					...state.products.slice(0, index),
					product,
					...state.products.slice(index + 1),
				];
			}
		},
	},
});

const { setProducts, addProduct } = productSlice.actions;

const getProductsAction = () => async (dispatch: Dispatch) => {
	try {
		const products = await fetchProducts();
		dispatch(setProducts(products));
	} catch (err) {
		toast.error(err?.message || 'Default Error');
	}
};

const createProductAction =
	(product: IProductCreate) => async (dispatch: Dispatch) => {
		return createProduct(product)
			.then((newProduct) => {
				dispatch(addProduct(newProduct));
				toast.success('success');
			})
			.catch((err) => {
				toast.error(err?.message || 'Default Error');
				throw err;
			});
	};

const getProductByIdAction = (id: string) => async (dispatch: Dispatch) => {
	return fetchProductById(id)
		.then((product) => {
			dispatch(addProduct(product));
		})
		.catch((err) => {
			toast.error(err?.message || 'Default Error');
			throw err;
		});
};

const updateProductAction =
	(id: string, product: IProductCreate) => async (dispatch: Dispatch) => {
		return updateProduct(id, product)
			.then((newProduct) => {
				dispatch(addProduct(newProduct));
			})
			.catch((err) => {
				toast.error(err?.message || 'Default Error');
				throw err;
			});
	};

export {
	createProductAction,
	getProductByIdAction,
	getProductsAction,
	updateProductAction,
};

const productState = (state: IRootState) => state.product;
const selector = function <T>(combiner: { (state: IProductState): T }) {
	return createSelector(productState, combiner);
};

export const getProducts = selector((state) => state.products);
export const getProduct = (id: string) =>
	selector((state) => state.products.find((item) => item.id === id));

export default productSlice.reducer;

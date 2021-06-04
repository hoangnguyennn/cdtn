import { createSelector, createSlice, Dispatch } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { createProduct, fetchProducts } from '../../apis/common';
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
		addProductToState(state, action) {
			const product: IProduct = action.payload;
			state.products = [product, ...state.products];
		},
	},
});

const { setProducts, addProductToState } = productSlice.actions;

const getProductsAction = () => async (dispatch: Dispatch) => {
	try {
		const products = await fetchProducts();
		dispatch(setProducts(products));
	} catch (err) {
		toast.error(err.message);
	}
};

const createProductAction =
	(product: IProductCreate) => async (dispatch: Dispatch) => {
		return createProduct(product)
			.then((newProduct) => {
				dispatch(addProductToState(newProduct));
				toast.success('success');
			})
			.catch((err) => {
				toast.error(err.message);
				throw err;
			});
	};

export { getProductsAction, createProductAction };

const productState = (state: IRootState) => state.product;
const selector = function <T>(combiner: { (state: IProductState): T }) {
	return createSelector(productState, combiner);
};

export const getProducts = selector((state) => state.products);

export default productSlice.reducer;

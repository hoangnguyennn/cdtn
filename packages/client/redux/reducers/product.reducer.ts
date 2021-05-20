import { createSelector, createSlice, Dispatch } from '@reduxjs/toolkit';
import { fetchTrendingProducts } from '../../apis/product.api';
import { IProductState, IRootState } from '../../interfaces/IState';

const initialState: IProductState = {
	trendingProducts: [],
};

const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		setTrendingProducts: (state, action) => {
			state.trendingProducts = action.payload.trendingProducts;
		},
	},
});

const { setTrendingProducts } = productSlice.actions;

const fetchTrendingProductsAction = () => async (dispatch: Dispatch) => {
	try {
		const trendingProducts = await fetchTrendingProducts();
		dispatch(setTrendingProducts({ trendingProducts }));
	} catch (err) {
		console.log(err);
	}
};

export { fetchTrendingProductsAction };

const productState = (state: IRootState) => state.product;
const selector = function <T>(combiner: { (state: IProductState): T }) {
	return createSelector(productState, combiner);
};

export const getTrendingProducts = selector((state) => state.trendingProducts);

export default productSlice.reducer;

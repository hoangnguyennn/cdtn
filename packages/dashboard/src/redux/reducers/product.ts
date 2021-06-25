import { createSelector, createSlice, Dispatch } from '@reduxjs/toolkit';
import {
	createProduct,
	fetchProductById,
	fetchProducts,
	updateProduct,
	updateProductStatus,
} from '../../apis/common';
import { IProduct, IProductCreate, IProductUpdate } from '../../interfaces';
import { ProductStatus } from '../../interfaces/enum';
import { IProductState, IRootState } from '../../interfaces/IState';

const initialState: IProductState = {
	products: {},
	pages: [],
	total: 0,
};

const productSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		setProducts(state, action) {
			const data: IProduct[] = action.payload.data;
			const total: number = action.payload.total;
			const page: number = action.payload.page;

			state.products[page] = data;
			state.total = total;
		},
		addProduct(state, action) {
			const product: IProduct = action.payload;
			for (const [page, pageItems] of Object.entries(state.products)) {
				const index = pageItems.findIndex((item) => item.id === product.id);
				if (index !== -1) {
					state.products[page][index] = product;
					return;
				}
			}

			state.products[0] = [...(state.products[0] || []), product];
		},
		addPage(state, action) {
			const page: number = action.payload;
			if (!state.pages.includes(page)) {
				state.pages = [...state.pages, page];
			}
		},
	},
});

const { setProducts, addProduct, addPage } = productSlice.actions;

export const createProductAction =
	(product: IProductCreate) => async (dispatch: Dispatch) => {
		return createProduct(product).then((newProduct) => {
			dispatch(addProduct(newProduct));
		});
	};

export const getProductsAction =
	(page: number, pageSize: number) =>
	async (dispatch: Dispatch, getState: { (): IRootState }) => {
		const pages = getPages()(getState());
		if (pages.includes(page)) {
			return;
		}

		return fetchProducts(page, pageSize).then(({ data, total }) => {
			dispatch(setProducts({ data, total, page }));
			dispatch(addPage(page));
		});
	};

export const getProductByIdAction =
	(id: string) => async (dispatch: Dispatch) => {
		return fetchProductById(id).then((product) => {
			dispatch(addProduct(product));
		});
	};

export const updateProductAction =
	(id: string, product: IProductUpdate) => async (dispatch: Dispatch) => {
		return updateProduct(id, product).then((newProduct) => {
			dispatch(addProduct(newProduct));
		});
	};

export const updateProductStatusAction =
	(id: string, newStatus: ProductStatus) => async (dispatch: Dispatch) => {
		return updateProductStatus(id, newStatus).then((product) => {
			dispatch(addProduct(product));
		});
	};

const productState = (state: IRootState) => state.product;
const selector = function <T>(combiner: { (state: IProductState): T }) {
	return createSelector(productState, combiner);
};

export const getProducts = (page = 1) =>
	selector((state) => {
		return state.products[page] || [];
	});
export const getProduct = (id: string) =>
	selector((state) => {
		for (const pageItems of Object.values(state.products)) {
			const product = pageItems.find((item) => item.id === id);
			if (product) {
				return product;
			}
		}

		return null;
	});
export const getTotal = () => selector((state) => state.total);
export const getPages = () => selector((state) => state.pages);

export default productSlice.reducer;

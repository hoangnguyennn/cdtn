import { createSelector, createSlice, Dispatch } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
	createProductUnit,
	fetchProductUnitById,
	fetchProductUnits,
	updateProductUnit,
} from '../../apis/common';
import { IProductUnit, IProductUnitCreate } from '../../interfaces';
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
		updateItem(state, action) {
			const productUnit = action.payload;

			const index = state.productUnits.findIndex(
				(item) => item.id === productUnit.id
			);

			if (index === -1) {
				state.productUnits = [...state.productUnits, productUnit];
			} else {
				state.productUnits = [
					...state.productUnits.slice(0, index),
					productUnit,
					...state.productUnits.slice(index + 1),
				];
			}
		},
	},
});

const { addProductUnit, setProductUnits, updateItem } =
	productUnitSlice.actions;

const createProductUnitAction =
	(productUnit: IProductUnitCreate) => async (dispatch: Dispatch) => {
		return createProductUnit(productUnit)
			.then((newProductUnit) => {
				dispatch(addProductUnit(newProductUnit));
			})
			.catch((err) => {
				toast.error(err.message);
				throw err;
			});
	};

const fetchProductUnitsAction = () => async (dispatch: Dispatch) => {
	return fetchProductUnits()
		.then((productUnits) => {
			dispatch(setProductUnits(productUnits));
		})
		.catch((err) => {
			toast.error(err.message);
			throw err;
		});
};

const fetchProductUnitByIdAction =
	(id: string) => async (dispatch: Dispatch) => {
		return fetchProductUnitById(id)
			.then((productUnit) => {
				dispatch(addProductUnit(productUnit));
			})
			.catch((err) => {
				toast.error(err.message);
				throw err;
			});
	};

const updateProductUnitAction =
	(id: string, unit: IProductUnit) => async (dispatch: Dispatch) => {
		return updateProductUnit(id, unit)
			.then((unitUpdated) => {
				dispatch(updateItem(unitUpdated));
			})
			.catch((err) => {
				toast.error(err.message);
				throw err;
			});
	};

export {
	createProductUnitAction,
	fetchProductUnitByIdAction,
	fetchProductUnitsAction,
	updateProductUnitAction,
};

const productUnitState = (state: IRootState) => state.productUnit;
const selector = function <T>(combiner: { (state: IProductUnitState): T }) {
	return createSelector(productUnitState, combiner);
};

export const getProductUnits = selector((state) => state.productUnits);
export const getProductUnit = (id: string) =>
	selector((state) => {
		return state.productUnits.find((item) => item.id === id);
	});

export default productUnitSlice.reducer;

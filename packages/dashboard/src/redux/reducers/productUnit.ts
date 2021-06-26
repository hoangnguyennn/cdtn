import { createSelector, createSlice, Dispatch } from '@reduxjs/toolkit';
import {
  createProductUnit,
  fetchProductUnitById,
  fetchProductUnits,
  updateProductUnit
} from '../../apis/common';
import { IProductUnitCreate } from '../../interfaces';
import { IProductUnitState, IRootState } from '../../interfaces/IState';

const initialState: IProductUnitState = {
  productUnits: []
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

      const index = state.productUnits.findIndex(
        item => item.id === productUnit.id
      );

      if (index === -1) {
        state.productUnits = [...state.productUnits, productUnit];
      } else {
        state.productUnits = [
          ...state.productUnits.slice(0, index),
          productUnit,
          ...state.productUnits.slice(index + 1)
        ];
      }
    }
  }
});

const { addProductUnit, setProductUnits } = productUnitSlice.actions;

export const createProductUnitAction = (
  productUnit: IProductUnitCreate
) => async (dispatch: Dispatch) => {
  return createProductUnit(productUnit).then(newProductUnit => {
    dispatch(addProductUnit(newProductUnit));
  });
};

export const getProductUnitsAction = () => async (dispatch: Dispatch) => {
  return fetchProductUnits().then(productUnits => {
    dispatch(setProductUnits(productUnits));
  });
};

export const getProductUnitByIdAction = (id: string) => async (
  dispatch: Dispatch
) => {
  return fetchProductUnitById(id).then(productUnit => {
    dispatch(addProductUnit(productUnit));
  });
};

export const updateProductUnitAction = (
  id: string,
  unit: IProductUnitCreate
) => async (dispatch: Dispatch) => {
  return updateProductUnit(id, unit).then(unitUpdated => {
    dispatch(addProductUnit(unitUpdated));
  });
};

const productUnitState = (state: IRootState) => state.productUnit;
const selector = function<T>(combiner: { (state: IProductUnitState): T }) {
  return createSelector(productUnitState, combiner);
};

export const getProductUnits = () => selector(state => state.productUnits);
export const getProductUnit = (id: string) =>
  selector(state => state.productUnits.find(item => item.id === id));

export default productUnitSlice.reducer;

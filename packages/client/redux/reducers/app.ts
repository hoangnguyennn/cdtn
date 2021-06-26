import { createSelector, createSlice } from '@reduxjs/toolkit';
import { IAppState, IRootState } from '../../interfaces/IState';

export const initialState: IAppState = {
  limitOfToast: 3
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {}
});

const appState = (state: IRootState) => state.app;
const selector = function<T>(combiner: { (state: IAppState): T }) {
  return createSelector(appState, combiner);
};

export const getLimitOfToast = () => selector(state => state.limitOfToast);

export default appSlice.reducer;

import { createSelector, createSlice } from '@reduxjs/toolkit';
import { IAppState, IRootState } from '../../interfaces/IState';

const initialState: IAppState = {
	isLoading: false,
};

const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		setLoading(state, action) {
			state.isLoading = action.payload;
		},
	},
});

export const { setLoading } = appSlice.actions;

const appState = (state: IRootState) => state.app;
const selector = function <T>(combiner: { (state: IAppState): T }) {
	return createSelector(appState, combiner);
};

export const getLoading = () => selector((state) => state.isLoading);

export default appSlice.reducer;

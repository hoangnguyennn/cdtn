import { createSelector, createSlice, Dispatch } from '@reduxjs/toolkit';
import { fetchCategories } from '../../apis/common';
import { ICategoryState, IRootState } from '../../interfaces/IState';

const initialState: ICategoryState = {
	categories: [],
};

const categorySlice = createSlice({
	name: 'category',
	initialState,
	reducers: {
		setCategories(state, action) {
			state.categories = action.payload;
		},
	},
});

const { setCategories } = categorySlice.actions;

export const gethCategoriesAction = () => async (dispatch: Dispatch) => {
	return fetchCategories().then((categories) => {
		dispatch(setCategories(categories));
	});
};

const categoryState = (state: IRootState) => state.category;
const selector = function <T>(combiner: { (state: ICategoryState): T }) {
	return createSelector(categoryState, combiner);
};

export const getCategories = () => selector((state) => state.categories);

export default categorySlice.reducer;

import { createSelector, createSlice, Dispatch } from '@reduxjs/toolkit';
import { createCategory, fetchCategories } from '../../apis/common';
import { ICategory, ICategoryCreate } from '../../interfaces';
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
		addCategory(state, action) {
			const category: ICategory = action.payload;
			const index = state.categories.findIndex(
				(item) => item.id === category.id
			);

			if (index === -1) {
				state.categories = [...state.categories, category];
			} else {
				state.categories = [
					...state.categories.slice(0, index),
					category,
					...state.categories.slice(index + 1),
				];
			}
		},
	},
});

const { setCategories, addCategory } = categorySlice.actions;

export const createCategoryAction =
	(category: ICategoryCreate) => async (dispatch: Dispatch) => {
		return createCategory(category).then((newCategory) => {
			dispatch(addCategory(newCategory));
		});
	};

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

import { configureStore } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { IRootState } from '../interfaces/IState';

import rootReducer from './reducers';

const initialStore = (initialState: IRootState) => {
	return configureStore({
		preloadedState: initialState,
		reducer: rootReducer,
	});
};

const useStore = (initialState: IRootState) => {
	const store = useMemo(() => initialStore(initialState), [initialState]);
	return store;
};

export default useStore;

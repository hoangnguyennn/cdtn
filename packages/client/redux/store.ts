import { configureStore } from '@reduxjs/toolkit';
import { useMemo } from 'react';

import { initialState as initialAppState } from './reducers/app';
import { initialState as initialAuthState } from './reducers/auth';
import { initialState as initialCartState } from './reducers/cart';
import { initialState as initialPaymentMethodState } from './reducers/paymentMethod';
import { initialState as initialProductState } from './reducers/product';

import { IRootState } from '../interfaces/IState';
import rootReducer from './reducers';

let store: ReturnType<typeof initStore>;

const initStore = (
	preloadedState: IRootState = {
		auth: initialAuthState,
		product: initialProductState,
		cart: initialCartState,
		paymentMethod: initialPaymentMethodState,
		app: initialAppState,
	}
) => {
	return configureStore({
		preloadedState: preloadedState,
		reducer: rootReducer,
	});
};

export const initialStore = (preloadedState?: IRootState) => {
	let _store = store ?? initStore(preloadedState);

	if (preloadedState && store) {
		_store = initStore({
			...store.getState(),
			...preloadedState,
		});
		// Reset the current store
		store = undefined;
	}

	// For SSG and SSR always create a new store
	if (typeof window === 'undefined') return _store;
	// Create the store once in the client
	if (!store) store = _store;

	return _store;
};

const useStore = (initialState: IRootState) => {
	const store = useMemo(() => initialStore(initialState), [initialState]);
	return store;
};

export default useStore;

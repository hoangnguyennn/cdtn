import { createSelector, createSlice, Dispatch } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { ICartState, IRootState } from '../../interfaces/IState';
import { IOrderRequest } from '../../interfaces';
import isProductInCart from '../../helpers/isProductInCart';
import { order } from '../../apis/order.api';

export const initialState: ICartState = {
	cart: [],
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const indexInCart = state.cart.findIndex(
				(item) => item.id === action.payload.id
			);

			if (indexInCart !== -1) {
				state.cart = [
					...state.cart.slice(0, indexInCart),
					{
						...state.cart[indexInCart],
						qty: state.cart[indexInCart].qty + action.payload.qty,
					},
					...state.cart.slice(indexInCart + 1),
				];
			} else {
				state.cart = [...state.cart, action.payload];
			}

			localStorage.setItem('cart', JSON.stringify(state.cart));
			toast.info('Add to cart');
		},

		removeFromCart: (state, action) => {
			const indexInCart = state.cart.findIndex(
				(item) => item.id === action.payload.id
			);

			if (indexInCart !== -1) {
				state.cart = [
					...state.cart.slice(0, indexInCart),
					...state.cart.slice(indexInCart + 1),
				];
			}

			localStorage.setItem('cart', JSON.stringify(state.cart));
			toast.info('Remove from cart');
		},

		updateQty: (state, action) => {
			const indexInCart = state.cart.findIndex(
				(item) => item.id === action.payload.id
			);

			if (indexInCart !== -1) {
				if (action.payload.qty === 0) {
					state.cart = [
						...state.cart.slice(0, indexInCart),
						...state.cart.slice(indexInCart + 1),
					];
				} else {
					state.cart = [
						...state.cart.slice(0, indexInCart),
						{
							...state.cart[indexInCart],
							qty: action.payload.qty,
						},
						...state.cart.slice(indexInCart + 1),
					];
				}
			} else {
				state.cart = [...state.cart, action.payload];
			}

			localStorage.setItem('cart', JSON.stringify(state.cart));
			toast.info('Update quantity');
		},

		updateCartFromLocalStorage: (state) => {
			let cart = [];
			if (typeof window !== 'undefined') {
				if (localStorage.getItem('cart')) {
					const _cart = JSON.parse(localStorage.getItem('cart'));

					if (_cart instanceof Array) {
						cart = _cart.filter(isProductInCart);
					}
				}
			}
			state.cart = cart;
		},

		clearState(state) {
			state.cart = [];
		},
	},
});

export const {
	addToCart,
	removeFromCart,
	updateCartFromLocalStorage,
	updateQty,
	clearState,
} = cartSlice.actions;

export const orderAction =
	(orderRequest: IOrderRequest) => async (dispatch: Dispatch) => {
		try {
			await order(orderRequest);
			dispatch(clearState());
			toast.info('success');
		} catch (e) {
			toast.error(e.message);
		}
	};

const cartState = (state: IRootState) => state.cart;
const selector = function <T>(combiner: { (state: ICartState): T }) {
	return createSelector(cartState, combiner);
};

export const getCartItems = selector((state) => state.cart);
export const getCartLength = selector((state) =>
	state.cart.reduce((res, item) => res + item.qty, 0)
);

export const getCartSubtotal = selector((state) =>
	state.cart.reduce((res, item) => res + item.price * item.qty, 0)
);
export const getDeliveryFee = 0;

export default cartSlice.reducer;

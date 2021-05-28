import { createSelector, createSlice, Dispatch } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { ICartState, IRootState } from '../../interfaces/IState';
import { IOrder } from '../../interfaces/index';
import { order } from '../../apis/order.api';
import isProductInCart from '../../helpers/isProductInCart';

export const initialState: ICartState = {
	cartItems: [],
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart(state, action) {
			const indexInCart = state.cartItems.findIndex(
				(cartItem) => action.payload.id === cartItem.id
			);

			if (indexInCart === -1) {
				state.cartItems = [...state.cartItems, action.payload];
			} else {
				state.cartItems = [
					...state.cartItems.slice(0, indexInCart),
					{
						...state.cartItems[indexInCart],
						qty: state.cartItems[indexInCart].qty + action.payload.qty,
					},
					...state.cartItems.slice(indexInCart + 1),
				];
			}

			localStorage.setItem('cart', JSON.stringify(state.cartItems));
			toast.info('Add to cart');
		},
		removeFromCart(state, action) {
			const indexInCart = state.cartItems.findIndex(
				(cartItem) => action.payload.id === cartItem.id
			);

			if (indexInCart !== -1) {
				state.cartItems = [
					...state.cartItems.slice(0, indexInCart),
					...state.cartItems.slice(indexInCart + 1),
				];

				localStorage.setItem('cart', JSON.stringify(state.cartItems));
			}
		},
		updateCartFromLocalStorage(state) {
			let cartItems = [];
			if (typeof window !== 'undefined') {
				if (localStorage.getItem('cart')) {
					const _cart = JSON.parse(localStorage.getItem('cart'));
					if (_cart instanceof Array) {
						cartItems = _cart.filter(isProductInCart);
					}
				}
			}
			state.cartItems = cartItems;
		},
		updateQty(state, action) {
			const indexInCart = state.cartItems.findIndex(
				(cartItem) => action.payload.id === cartItem.id
			);

			if (indexInCart === -1) {
				state.cartItems = [...state.cartItems, action.payload];
			} else {
				state.cartItems = [
					...state.cartItems.slice(0, indexInCart),
					{
						...state.cartItems[indexInCart],
						qty: action.payload.qty,
					},
					...state.cartItems.slice(indexInCart + 1),
				];
			}

			localStorage.setItem('cart', JSON.stringify(state.cartItems));
		},
		clearCart(state) {
			state.cartItems = [];
		},
	},
});

export const {
	addToCart,
	clearCart,
	removeFromCart,
	updateCartFromLocalStorage,
	updateQty,
} = cartSlice.actions;

export const orderAction =
	(orderRequest: IOrder) => async (dispatch: Dispatch) => {
		try {
			await order(orderRequest);
			dispatch(clearCart());
			toast.info('success');
		} catch (e) {
			toast.error(e.message);
		}
	};

const cartState = (state: IRootState) => state.cart;
const selector = function <T>(combiner: { (state: ICartState): T }) {
	return createSelector(cartState, combiner);
};

export const getCartItems = selector((state) => state.cartItems);
export const getCartLength = selector((state) =>
	state.cartItems.reduce((res, item) => res + item.qty, 0)
);

export const getCartSubtotal = selector((state) =>
	state.cartItems.reduce((res, item) => res + item.price * item.qty, 0)
);

export const getDeliveryFee = 0;

export default cartSlice.reducer;

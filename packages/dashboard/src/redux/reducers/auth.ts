import { createSelector, createSlice, Dispatch } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { IAuthState, IRootState } from '../../interfaces/IState';
import { login, loginByToken } from '../../apis/common';

const initialState: IAuthState = {
	token: '',
	user: {
		id: '',
		email: '',
		fullName: '',
		address: '',
		phone: '',
		userType: '',
	},
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setToken(state, action) {
			state.token = action.payload;
		},
		setUser(state, action) {
			state.user = {
				id: action.payload.id,
				email: action.payload.email,
				fullName: action.payload.fullName,
				address: action.payload.address,
				phone: action.payload.phone,
				userType: action.payload.userType,
			};
		},
		clearUser(state) {
			state.token = '';
			state.user = {
				id: '',
				email: '',
				fullName: '',
				address: '',
				phone: '',
				userType: '',
			};
		},
	},
});

const { setToken, setUser, clearUser } = authSlice.actions;

const loginAction = (userLogin: any) => async (dispatch: Dispatch) => {
	return login(userLogin)
		.then((response) => {
			if (response.user.userType !== 'MANAGER') {
				localStorage.removeItem('access-token');
				dispatch(clearUser());
				toast.error('Not found');
				return;
			}

			dispatch(setToken(response.token));
			dispatch(setUser(response.user));
			window.localStorage.setItem('access-token', response.token);
		})
		.catch((err) => {
			toast.error(err?.message || 'Default Error');
			throw err;
		});
};

const loginByTokenAction = () => async (dispatch: Dispatch) => {
	const token = localStorage.getItem('access-token');
	if (!token) {
		localStorage.removeItem('access-token');
		dispatch(clearUser());
		throw new Error('token not found');
	}

	return loginByToken()
		.then((user) => {
			if (user.userType !== 'MANAGER') {
				localStorage.removeItem('access-token');
				dispatch(clearUser());
				throw new Error('forbidden');
			}

			dispatch(setToken(token));
			dispatch(setUser(user));
			return;
		})
		.catch((err) => {
			localStorage.removeItem('access-token');
			dispatch(clearUser());
			throw err;
		});
};

export { loginAction, loginByTokenAction };

const authState = (state: IRootState) => state.auth;
const selector = function <T>(combiner: { (state: IAuthState): T }) {
	return createSelector(authState, combiner);
};

export const getToken = selector((state) => state.token);
export const getUserType = selector((state) => state.user.userType);

export default authSlice.reducer;

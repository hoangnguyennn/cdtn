import { createSlice, createSelector, Dispatch } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { IAuthState, IRootState } from '../../interfaces/IState';
import { ILogin, IUserCreate, IUserUpdate } from '../../interfaces/index';
import { login, loginByToken, register } from '../../apis/auth.api';
import { updateUserInfo } from '../../apis/user.api';

export const initialState: IAuthState = {
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

const AuthSlice = createSlice({
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

const { setToken, setUser, clearUser } = AuthSlice.actions;

const registerAction = (user: IUserCreate) => async () => {
	return register(user).catch((err) => {
		toast.error(err.message);
		throw err;
	});
};

const loginAction = (userLogin: ILogin) => async (dispatch: Dispatch) => {
	return login(userLogin)
		.then((response) => {
			dispatch(setToken(response.token));
			dispatch(setUser(response.user));
			window.localStorage.setItem('access-token', response.token);
		})
		.catch((err) => {
			toast.error(err.message);
			throw err;
		});
};

const loginByTokenAction = () => async (dispatch: Dispatch) => {
	const token = localStorage.getItem('access-token');
	if (!token) {
		localStorage.removeItem('access-token');
		return dispatch(clearUser());
	}

	return loginByToken(token)
		.then((user) => {
			dispatch(setToken(token));
			dispatch(setUser(user));
		})
		.catch((err) => {
			localStorage.removeItem('access-token');
			throw err;
		});
};

const logoutAction = () => () => localStorage.removeItem('access-token');

const updateUserInfoAction = (userId: string, userInfo: IUserUpdate) => {
	return async (dispatch: Dispatch) => {
		const token = localStorage.getItem('access-token');
		if (!token) {
			localStorage.removeItem('access-token');
			return dispatch(clearUser());
		}

		return updateUserInfo(userId, userInfo, token)
			.then((userUpdated) => {
				dispatch(setUser(userUpdated));
				toast.success('success');
			})
			.catch((err) => {
				toast.error(err.message);
				throw err;
			});
	};
};

export {
	loginAction,
	loginByTokenAction,
	logoutAction,
	registerAction,
	updateUserInfoAction,
};

const authState = (state: IRootState) => state.auth;
const selector = function <T>(combiner: { (state: IAuthState): T }) {
	return createSelector(authState, combiner);
};

export const getFullName = selector((state) => state.user.fullName);
export const getToken = selector((state) => state.token);
export const getUserInfo = selector((state) => state.user);

export default AuthSlice.reducer;

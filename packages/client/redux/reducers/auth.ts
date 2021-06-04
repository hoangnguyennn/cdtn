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
	try {
		await register(user);
	} catch (err) {
		toast.error(err.message);
		throw err;
	}
};

const loginAction = (userLogin: ILogin) => async (dispatch: Dispatch) => {
	try {
		const loginResponse = await login(userLogin);
		dispatch(setToken(loginResponse.token));
		dispatch(setUser(loginResponse.user));
		window.localStorage.setItem('access-token', loginResponse.token);
	} catch (err) {
		toast.error(err.message);
	}
};

const loginByTokenAction = () => async (dispatch: Dispatch) => {
	const token = localStorage.getItem('access-token');
	if (!token) {
		localStorage.removeItem('access-token');
		dispatch(clearUser());
		return;
	}

	try {
		const user = await loginByToken(token);
		dispatch(setToken(token));
		dispatch(setUser(user));
	} catch (err) {
		localStorage.removeItem('access-token');
		throw err;
	}
};

const logoutAction = () => async () => {
	try {
		localStorage.removeItem('access-token');
	} catch (err) {
		console.log(err);
		throw err;
	}
};

const updateUserInfoAction = (userId: string, userInfo: IUserUpdate) => {
	return async (dispatch: Dispatch) => {
		const token = localStorage.getItem('access-token');
		if (!token) {
			localStorage.removeItem('access-token');
			dispatch(clearUser());
			return;
		}

		try {
			const userUpdated = await updateUserInfo(userId, userInfo, token);
			dispatch(setUser(userUpdated));
			toast.success('success');
		} catch (err) {
			console.log(err);
			throw err;
		}
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

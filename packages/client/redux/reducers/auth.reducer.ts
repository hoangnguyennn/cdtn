import { createSlice, createSelector, Dispatch } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import Router from 'next/router';

import { IAuthState, IRootState } from '../../interfaces/IState';
import { ILogin, IUserRegister } from '../../interfaces';
import { login, loginByToken, registerAccount } from '../../apis/auth.api';
import { PATH_NAME } from '../../configs/pathName';

export const initialState: IAuthState = {
	token: '',
	user: {
		id: '',
		email: '',
		fullName: '',
		address: '',
		phone: '',
	},
	message: '',
	hasError: false,
};

const AuthSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setUserSuccessful: (state: IAuthState, action) => {
			state.token = action.payload.token;
			state.user = action.payload.user;
			state.hasError = false;
		},
		setUserFailed: (state: IAuthState) => {
			state.hasError = true;
		},
		clearUser: (state: IAuthState) => {
			state.token = initialState.token;
			state.user = initialState.user;
			state.message = initialState.message;
			state.hasError = initialState.hasError;
		},
	},
});

const { setUserSuccessful, setUserFailed, clearUser } = AuthSlice.actions;

const registerAccountAction = (userRegister: IUserRegister) => async () => {
	try {
		await registerAccount(userRegister);
		Router.push(PATH_NAME.LOGIN);
	} catch (err) {
		toast.error(err.message);
	}
};

const loginAction = (userLogin: ILogin) => async (dispatch: Dispatch) => {
	try {
		const loginResponse = await login(userLogin);
		dispatch(setUserSuccessful(loginResponse));
		window.localStorage.setItem('access-token', loginResponse.token);
		Router.push(PATH_NAME.HOME);
	} catch (err) {
		toast.error(err.message);
		dispatch(setUserFailed());
	}
};

const loginByTokenAction = () => async (dispatch: Dispatch) => {
	const token = localStorage.getItem('access-token');
	if (!token) {
		dispatch(clearUser());
		localStorage.removeItem('access-token');
		return;
	}

	try {
		const userResponse = await loginByToken(token);
		dispatch(setUserSuccessful({ token, user: userResponse }));
	} catch {
		localStorage.removeItem('access-token');
		dispatch(setUserFailed());
	}
};

export { registerAccountAction, loginAction, loginByTokenAction };

const authState = (state: IRootState) => state.auth;
const selector = function <T>(combiner: { (state: IAuthState): T }) {
	return createSelector(authState, combiner);
};

export const getFullName = selector((state) => state.user.fullName);
export const getToken = selector((state) => state.token);
export const getUserInfo = selector((state) => state.user);

export default AuthSlice.reducer;

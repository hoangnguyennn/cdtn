import Router from 'next/router';
import { createSlice, createSelector, Dispatch } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { IAuth, IUserRegister, IRootState, ILogin } from '../../models';

import { registerApi, loginApi } from '../../apis/auth.api';
import { PATH_NAME } from '../../configs/pathName';

const initialState: IAuth = {
	token: '',
	user: {
		_id: '',
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
		setUserSuccessful: (state: IAuth, action) => {
			state.token = action.payload.token;
			state.user = action.payload.user;
			state.message = action.payload.message;
			state.hasError = false;
		},

		setUserFailed: (state: IAuth, action) => {
			state.message = action.payload.message;
			state.hasError = true;
		},
	},
});

const { setUserSuccessful, setUserFailed } = AuthSlice.actions;

const registerAction = (user: IUserRegister) => async (dispatch: Dispatch) => {
	try {
		await registerApi(user);
		Router.push(PATH_NAME.LOGIN);
	} catch (e) {
		const message = e.response?.data?.message || e.message;
		toast.error(message);
		dispatch(setUserFailed({ message }));
	}
};

const loginAction = (userLogin: ILogin) => async (dispatch: Dispatch) => {
	try {
		const res = await loginApi(userLogin);
		dispatch(setUserSuccessful(res.data));
		Router.push(PATH_NAME.HOME);
	} catch (e) {
		const message = e.response?.data?.message || e.message;
		toast.error(message);
		dispatch(setUserFailed({ message }));
	}
};

const authState = (state: IRootState) => state.auth;

export const getMessage = createSelector(authState, (state) => state.message);
export const getHasError = createSelector(authState, (state) => state.hasError);
export const getUserFullname = createSelector(
	authState,
	(state) => state.user.fullName
);

export { registerAction, loginAction };

export default AuthSlice.reducer;

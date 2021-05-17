import Router from 'next/router';
import { createSlice, createSelector, Dispatch } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { IAuth, IUserRegister, IRootState } from '../../models';

import { registerApi } from '../../apis/auth.api';
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

const { setUserFailed } = AuthSlice.actions;

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

const authState = (state: IRootState) => state.auth;

export const getMessage = createSelector(authState, (state) => state.message);
export const getHasError = createSelector(authState, (state) => state.hasError);

export { registerAction };

export default AuthSlice.reducer;

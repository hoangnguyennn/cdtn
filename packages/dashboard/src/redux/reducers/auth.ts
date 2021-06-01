import { createSelector, createSlice, Dispatch } from '@reduxjs/toolkit';
import { useHistory } from 'react-router-dom';
import { login, loginByToken } from '../../apis/common';
import { PATH_NAME } from '../../configs';
import { IAuthState, IRootState } from '../../interfaces/IState';

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
	try {
		const loginResponse = await login(userLogin);
		dispatch(setToken(loginResponse.token));
		dispatch(setUser(loginResponse.user));
		window.localStorage.setItem('access-token', loginResponse.token);
	} catch (err) {
		console.log(err);
	}
};

const loginByTokenAction =
	(history: ReturnType<typeof useHistory>) => async (dispatch: Dispatch) => {
		const token = localStorage.getItem('access-token');
		if (!token) {
			localStorage.removeItem('access-token');
			dispatch(clearUser());
			history.push(PATH_NAME.LOGIN);
			return;
		}

		try {
			const user = await loginByToken(token);

			if (user.userType !== 'MANGER') {
				localStorage.removeItem('access-token');
				dispatch(clearUser());
				history.push(PATH_NAME.LOGIN);
				return;
			}

			dispatch(setToken(token));
			dispatch(setUser(user));
		} catch {
			localStorage.removeItem('access-token');
			dispatch(clearUser());
			history.push(PATH_NAME.LOGIN);
		}
	};

export { loginAction, loginByTokenAction };

const authState = (state: IRootState) => state.auth;
const selector = function <T>(combiner: { (state: IAuthState): T }) {
	return createSelector(authState, combiner);
};

export const getToken = selector((state) => state.token);
export const getUserType = selector((state) => state.user.userType);

export default authSlice.reducer;

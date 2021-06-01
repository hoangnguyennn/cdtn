import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { getToken, loginByTokenAction } from '../redux/reducers/auth';

const Auth: FC = ({ children }) => {
	const dispatch = useDispatch();
	const token = useSelector(getToken);
	const history = useHistory();

	useEffect(() => {
		if (!token) {
			dispatch(loginByTokenAction(history));
		}
	}, [dispatch, history, token]);

	return <>{children}</>;
};

export default Auth;

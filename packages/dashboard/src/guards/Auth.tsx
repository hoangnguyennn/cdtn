import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { PATH_NAME } from '../configs';

import { getToken, loginByTokenAction } from '../redux/reducers/auth';

const Auth: FC = ({ children }) => {
  const dispatch = useDispatch();
  const token = useSelector(getToken());
  const history = useHistory();

  useEffect(() => {
    const login = async () => {
      if (!token) {
        try {
          await dispatch(loginByTokenAction());
        } catch {
          history.push(PATH_NAME.LOGIN);
        }
      }
    };

    login();
  }, [dispatch, history, token]);

  return <>{children}</>;
};

export default Auth;

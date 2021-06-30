import { Form, Input, Button, Checkbox, notification } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { getToken, getUserType, loginAction } from '../../redux/reducers/auth';
import { PATH_NAME } from '../../configs';

import bg from '../../assets/images/login-bg.jpg';
import avatar from '../../assets/images/avatar.jpg';

import './Login.css';

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const token = useSelector(getToken());
  const userType = useSelector(getUserType());

  const onFinish = async (values: any) => {
    try {
      await dispatch(loginAction(values));
      notification.success({ message: 'Success' });
    } catch (err) {
      notification.error({ message: err?.message || 'error' });
    }
  };

  useEffect(() => {
    if (token && userType === 'MANAGER') {
      history.push(PATH_NAME.HOME);
    }
  }, [history, token, userType]);

  return (
    <div
      className="login-form"
      style={{
        backgroundImage: `url(${bg})`
      }}
    >
      {console.log(process.env.REACT_APP_NAME)}
      <Form
        name="basic"
        className="form"
        initialValues={{ remember: true, layout: 'vertical' }}
        onFinish={onFinish}
      >
        <div className="logo">
          <img src={avatar} alt="" />
        </div>
        <h2>Log In</h2>
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input type="email" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" className="remember">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;

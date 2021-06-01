import { Form, Input, Button, Checkbox } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { PATH_NAME } from '../../configs';

import { getToken, getUserType, loginAction } from '../../redux/reducers/auth';

import './Login.css';

const Login = () => {
	const token = useSelector(getToken);
	const userType = useSelector(getUserType);
	const dispatch = useDispatch();
	const history = useHistory();

	const onFinish = (values: any) => {
		dispatch(loginAction(values));
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo);
	};

	useEffect(() => {
		if (token && userType === 'MANAGER') {
			history.push(PATH_NAME.HOME);
		}
	}, [history, token, userType]);

	return (
		<div className="login-form">
			<Form
				name="basic"
				className="form"
				initialValues={{ remember: true, layout: 'vertical' }}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
			>
				<div className="logo">
					<img
						src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.6435-9/189700091_2965430183781561_3921210924480430952_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=k6zJX6uQPuQAX_h9F8Y&_nc_ht=scontent-sin6-1.xx&oh=961a088c7640976ec36392284bcbd836&oe=60DB7F7E"
						alt=""
					/>
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

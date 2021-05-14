import Link from 'next/link';
import { FormEvent, useRef } from 'react';
import { Root } from './Login';

const Login = () => {
	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);

	const handleFormSubmit = (event: FormEvent) => {
		event.preventDefault();

		// const email = emailRef.current.value;
		// const password = passwordRef.current.value;

		console.log('submit');
	};

	return (
		<Root>
			<div className="container">
				<h2 className="title">Login</h2>
				<form className="login-form" onSubmit={handleFormSubmit}>
					<input
						ref={emailRef}
						type="text"
						className="email"
						placeholder="Your email"
						required
					/>
					<input
						ref={passwordRef}
						type="password"
						className="password"
						placeholder="Enter password"
						required
					/>
					<div className="actions">
						<div></div>
						<Link href="/">
							<a>Forgotten password?</a>
						</Link>
					</div>
					<button type="submit" className="submit">
						Login
					</button>
				</form>
			</div>
		</Root>
	);
};

export default Login;

import { FormEvent, useRef } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import { Root } from './Login';

const Login = () => {
	const { t } = useTranslation();
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
				<h2 className="title">{t('Login')}</h2>
				<form className="login-form" onSubmit={handleFormSubmit}>
					<input
						ref={emailRef}
						type="text"
						className="email"
						placeholder={t('Your email')}
						required
					/>
					<input
						ref={passwordRef}
						type="password"
						className="password"
						placeholder={t('Enter password')}
						required
					/>
					<div className="actions">
						<div></div>
						<Link href="/">
							<a>{t('Forgotten password?')}</a>
						</Link>
					</div>
					<button type="submit" className="submit">
						{t('Login')}
					</button>
				</form>
			</div>
		</Root>
	);
};

export default Login;

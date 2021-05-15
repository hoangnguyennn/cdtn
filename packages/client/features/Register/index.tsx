import { FormEvent, useRef } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import { Root } from './Register';
import { PATH_NAME } from '../../configs/pathName';

const Register = () => {
	const { t } = useTranslation();
	const fullNameRef = useRef<HTMLInputElement>(null);
	const emailRef = useRef<HTMLInputElement>(null);
	const phoneRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const confirmRef = useRef<HTMLInputElement>(null);

	const handleFormSubmit = (event: FormEvent) => {
		event.preventDefault();

		console.log('submit');
	};

	return (
		<Root>
			<form className="register-form" onSubmit={handleFormSubmit}>
				<input
					ref={fullNameRef}
					type="text"
					className="fullname"
					placeholder={t('Fullname')}
					required
				/>
				<input
					ref={emailRef}
					type="text"
					className="email"
					placeholder={t('Your email')}
					required
				/>
				<input
					ref={phoneRef}
					type="text"
					className="phone"
					placeholder={t('Phone')}
					required
				/>
				<input
					ref={passwordRef}
					type="password"
					className="password"
					placeholder={t('Enter password')}
					required
				/>
				<input
					ref={confirmRef}
					type="password"
					className="confirm-password"
					placeholder={t('Confirm Password')}
					required
				/>
				<button type="submit" className="submit">
					{t('Register')}
				</button>
			</form>
			<div className="sign-in">
				<span>{t('or')}</span>
				<br />
				<Link href={PATH_NAME.LOGIN}>
					<a>{t('Login')}</a>
				</Link>
			</div>
		</Root>
	);
};

export default Register;

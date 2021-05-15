import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import { Root } from './Header';
import Logo from '../../features/Logo';

const Header = () => {
	const { t } = useTranslation();

	return (
		<Root>
			<div className="container">
				<Logo />

				<div className="tools">
					<Link href="/login">
						<a className="tool-item user">
							<div className="icon">
								<i className="czi-user"></i>
							</div>
							<div className="text ml-n2">
								<small>
									{t('Hello')}, {t('Sign in')}
								</small>
								<span>{t('My Account')}</span>
							</div>
						</a>
					</Link>

					<Link href="/cart">
						<a className="tool-item cart ml-3">
							<div className="icon">
								<i className="czi-cart"></i>
								<div className="label">0</div>
							</div>
							<div className="text">
								<small></small>
								<span>{t('My Cart')}</span>
							</div>
						</a>
					</Link>
				</div>
			</div>
		</Root>
	);
};

export default Header;

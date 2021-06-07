import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

import Container from '../core/Container';
import HeaderStyled from './Header';
import Logo from '../Logo';

import { getCartLength } from '../../redux/reducers/cart';
import { getFullName } from '../../redux/reducers/auth';
import { PATH_NAME } from '../../configs/pathName';
import User from './User';

const Header = () => {
	const { t } = useTranslation();
	const fullName = useSelector(getFullName());
	const cartLength = useSelector(getCartLength());

	return (
		<HeaderStyled>
			<Container>
				<Logo />

				<div className="tools">
					{fullName ? (
						<User fullName={fullName} />
					) : (
						<Link href={PATH_NAME.LOGIN}>
							<a className="tool-item user">
								<div className="icon">
									<i className="czi-user"></i>
								</div>
								<div className="text ml-n2">
									<small>{t('Sign in')}</small>
									<span>{t('My Account')}</span>
								</div>
							</a>
						</Link>
					)}

					<Link href={PATH_NAME.CART}>
						<a className="tool-item cart ml-3">
							<div className="icon">
								<i className="czi-cart"></i>
								<div className="label">{cartLength}</div>
							</div>
							<div className="text">
								<small></small>
								<span>{t('My Cart')}</span>
							</div>
						</a>
					</Link>
				</div>
			</Container>
		</HeaderStyled>
	);
};

export default Header;

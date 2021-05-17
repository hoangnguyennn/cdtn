import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import HeaderStyled from './Header';
import Logo from '../Logo';
import Container from '../core/Container';
import { PATH_NAME } from '../../configs/pathName';
import { useSelector } from 'react-redux';
import { getUserFullname } from '../../redux/reducers/auth.reducer';

const Header = () => {
	const { t } = useTranslation();
	const fullname = useSelector(getUserFullname);

	return (
		<HeaderStyled>
			<Container>
				<Logo />

				<div className="tools">
					{fullname ? (
						<div className="tool-item user">
							<div className="icon">
								<i className="czi-user"></i>
							</div>
							<div className="text ml-n2">
								<small>{t('My Account')}</small>
								<span>{fullname}</span>
							</div>
						</div>
					) : (
						<Link href={PATH_NAME.LOGIN}>
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
					)}

					<Link href={PATH_NAME.CART}>
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
			</Container>
		</HeaderStyled>
	);
};

export default Header;

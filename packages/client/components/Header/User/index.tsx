import { FC } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import Root from './User';
import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/reducers/auth';
import { PATH_NAME } from '../../../configs/pathName';

type UserProps = {
	fullName: string;
};

const User: FC<UserProps> = ({ fullName }) => {
	const { t } = useTranslation();
	const dispatch = useDispatch();

	return (
		<Root>
			<div className="tool-item user dropdown">
				<div className="icon">
					<i className="czi-user"></i>
				</div>
				<div className="text ml-n2">
					<small>{t('My Account')}</small>
					<span>{fullName}</span>
				</div>
				<div className="dropdown-menu">
					<Link href={PATH_NAME.MY_ORDER}>
						<a className="dropdown-item">My order</a>
					</Link>

					<Link href={PATH_NAME.MY_ACCOUNT}>
						<a className="dropdown-item">My account</a>
					</Link>

					<span className="dropdown-item" onClick={() => dispatch(logout())}>
						Logout
					</span>
				</div>
			</div>
		</Root>
	);
};

export default User;

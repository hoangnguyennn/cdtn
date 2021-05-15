import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import { PATH_NAME } from '../../configs/pathName';
import { Root } from './Banner';

const Banner = () => {
	const { t } = useTranslation();

	return (
		<Root>
			<div className="container">
				<div className="intro">
					<h2 className="title">{t('Slogan')}</h2>
					<div className="actions">
						<Link href={PATH_NAME.PRODUCTS}>
							<a className="button">{t('Shop Now')}</a>
						</Link>
					</div>
				</div>
			</div>
		</Root>
	);
};

export default Banner;

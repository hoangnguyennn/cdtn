import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import Root from './Filter';

type ProductFilterProps = {
	[key: string]: any;
};

const ProductFilter: FC<ProductFilterProps> = ({ className }) => {
	const { t } = useTranslation();

	return (
		<Root className={className}>
			<div className="filter-item">
				<h4 className="title">{t('Price')}</h4>
				<div className="price-small-text">{t('Select price range')}</div>
				<div className="price-range">
					<input pattern="[0-9]*" defaultValue={0} />
					<span>&nbsp;-&nbsp;</span>
					<input pattern="[0-9]*" defaultValue={0} />
				</div>
				<button className="submit-filter-price">{t('Apply')}</button>
			</div>
		</Root>
	);
};

export default ProductFilter;

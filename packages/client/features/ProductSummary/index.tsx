import { useTranslation } from 'react-i18next';
import Button from '../../components/core/Button';
import Input from '../../components/core/Input';

import { toCurrency } from '../../utils/formatter';
import ProductSummaryStyled from './ProductSummary';

const ProductSummary = () => {
	const { t } = useTranslation();

	return (
		<ProductSummaryStyled>
			<div className="thumbnail">
				<img
					src="http://vikinoko.com/resources/img/product-reishi.png"
					alt=""
				/>
			</div>
			<div className="info">
				<p className="price">{toCurrency(12123123)}</p>
				<div className="add-to-cart">
					<div className="qty">
						<Input defaultValue={1} />
					</div>
					<Button shadow>{t('Add to cart')}</Button>
				</div>
				<div className="description">
					<ul className="list">
						<li>Tốn 2X thời gian sinh trưởng!</li>
						<li>Tốn 2X thời gian sinh trưởng!</li>
						<li>Tốn 2X thời gian sinh trưởng!</li>
						<li>Tốn 2X thời gian sinh trưởng!</li>
						<li>Tốn 2X thời gian sinh trưởng!</li>
						<li>Tốn 2X thời gian sinh trưởng!</li>
						<li>Tốn 2X thời gian sinh trưởng!</li>
					</ul>
				</div>
			</div>
		</ProductSummaryStyled>
	);
};

export default ProductSummary;

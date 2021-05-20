import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { IProductResponse } from '../../interfaces';
import { toCurrency } from '../../utils/formatter';
import Button from '../../components/core/Button';
import Input from '../../components/core/Input';
import ProductSummaryStyled from './ProductSummary';

type ProductSummaryProps = {
	product: IProductResponse;
};

const ProductSummary: FC<ProductSummaryProps> = ({ product }) => {
	const { t } = useTranslation();

	return (
		<ProductSummaryStyled>
			<div className="thumbnail">
				<img src={product.images[0] || ''} alt="" />
			</div>
			<div className="info">
				<p className="price">{toCurrency(product.price)}</p>
				<div className="add-to-cart">
					<div className="qty">
						<Input defaultValue={1} />
					</div>
					<Button shadow>{t('Add to cart')}</Button>
				</div>
				<div className="description">
					{/* <ul className="list">
						<li>Tốn 2X thời gian sinh trưởng!</li>
						<li>Tốn 2X thời gian sinh trưởng!</li>
						<li>Tốn 2X thời gian sinh trưởng!</li>
						<li>Tốn 2X thời gian sinh trưởng!</li>
						<li>Tốn 2X thời gian sinh trưởng!</li>
						<li>Tốn 2X thời gian sinh trưởng!</li>
						<li>Tốn 2X thời gian sinh trưởng!</li>
					</ul> */}
					{product.description}
				</div>
			</div>
		</ProductSummaryStyled>
	);
};

export default ProductSummary;

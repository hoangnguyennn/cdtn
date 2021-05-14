import { useTranslation } from 'react-i18next';
import { toCurrency } from '../../../utils/formatter';

import { Root } from './ProductDetail';

const ProductDetail = () => {
	const { t } = useTranslation();

	return (
		<Root>
			<div className="container">
				<div className="summary">
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
								<input type="text" defaultValue={1} />
							</div>
							<button>{t('Add to cart')}</button>
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
				</div>
			</div>
		</Root>
	);
};

export default ProductDetail;

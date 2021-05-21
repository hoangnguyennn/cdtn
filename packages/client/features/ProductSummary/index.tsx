import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { IProductResponse } from '../../interfaces';
import { toCurrency } from '../../utils/formatter';
import Button from '../../components/core/Button';
import Input from '../../components/core/Input';
import ProductSummaryStyled from './ProductSummary';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/reducers/cart.reducer';

type ProductSummaryProps = {
	product: IProductResponse;
};

const ProductSummary: FC<ProductSummaryProps> = ({ product }) => {
	const { t } = useTranslation();
	const [qty, setQty] = useState('1');
	const dispatch = useDispatch();

	const handleAddToCart = () => {
		if (Number(qty) > 0) {
			dispatch(addToCart({ ...product, qty: Number(qty) }));
		}
	};

	return (
		<ProductSummaryStyled>
			<div className="thumbnail">
				<img src={product.images[0] || ''} alt="" />
			</div>
			<div className="info">
				<p className="price">{toCurrency(product.price)}</p>
				<div className="add-to-cart">
					<div className="qty">
						<Input
							type="number"
							min="1"
							value={qty}
							onChange={(e) => setQty(e.target.value)}
						/>
					</div>
					<Button shadow onClick={handleAddToCart}>
						{t('Add to cart')}
					</Button>
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

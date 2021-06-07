import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { addToCart } from '../../redux/reducers/cart';
import { IProduct } from '../../interfaces/index';
import { toCurrency } from '../../utils/formatter';
import { useDispatch } from 'react-redux';
import Button from '../../components/core/Button';
import Input from '../../components/core/Input';
import ProductSummaryStyled from './ProductSummary';
import { ProductStatus } from '../../interfaces/enums';

type ProductSummaryProps = {
	product: IProduct;
};

const ProductSummary: FC<ProductSummaryProps> = ({ product }) => {
	const [qty, setQty] = useState('1');
	const { t } = useTranslation();
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
				{product.status === ProductStatus.SELLING ? (
					<>
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
					</>
				) : (
					<div className="stop-business">{t('Stop business')}</div>
				)}

				<div className="description">{product.description}</div>
			</div>
		</ProductSummaryStyled>
	);
};

export default ProductSummary;

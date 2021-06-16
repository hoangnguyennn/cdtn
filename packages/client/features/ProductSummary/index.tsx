import { FC, KeyboardEvent, useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { addToCartAction } from '../../redux/reducers/cart';
import { IProduct } from '../../interfaces';
import { ProductStatus } from '../../interfaces/enums';
import { toCurrency } from '../../utils/formatter';
import Button from '../../components/core/Button';
import Input from '../../components/core/Input';
import Root from './ProductSummary';

type ProductSummaryProps = {
	product: IProduct;
};

const ProductSummary: FC<ProductSummaryProps> = ({ product }) => {
	const [qty, setQty] = useState('1');
	const { t } = useTranslation();
	const dispatch = useDispatch();

	const handleAddToCart = () => {
		if (Number(qty) > 0) {
			dispatch(addToCartAction({ ...product, qty: Number(qty) }));
			toast.info('add to cart');
		}
	};

	const handleInputKeyDown = (event: KeyboardEvent) => {
		if (event.key === 'e') {
			event.preventDefault();
		}
	};

	return (
		<Root>
			<div className="summary">
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
										onKeyDown={handleInputKeyDown}
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

					<div
						className="description ql-editor"
						dangerouslySetInnerHTML={{ __html: product.description }}
					/>
				</div>
			</div>
			<div className="more-info">
				<div
					className="ql-editor"
					dangerouslySetInnerHTML={{ __html: product.longDescription }}
				/>
			</div>
		</Root>
	);
};

export default ProductSummary;

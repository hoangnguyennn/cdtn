import { FC, MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

import useMatchMedia from '../../../hooks/useMatchMedia';

import { IProductWithLink } from '../../../interfaces';
import { toCurrency } from '../../../utils/formatter';
import ProductItemStyled from './ProductItem';

type ProductItemProps = IProductWithLink & {
	addToCart: () => any;
};

const Wrap: FC<{ link?: string }> = ({ children, link }) => {
	if (link) {
		return (
			<Link href={link}>
				<ProductItemStyled href={link}>{children}</ProductItemStyled>
			</Link>
		);
	}

	return <ProductItemStyled as="div">{children}</ProductItemStyled>;
};

const ProductItem: FC<ProductItemProps> = ({
	link,
	name,
	price,
	images,
	unit,
	addToCart,
}) => {
	const isDesktop = useMatchMedia('(min-width: 992px)');
	const { t } = useTranslation();

	const handleAddToCartClick = (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();

		addToCart();
	};

	return (
		<Wrap link={link}>
			<div className="wrap">
				<div className="thumbnail">
					<img src={images[0]} alt={name} />
				</div>
				<div className="info">
					<p className="name">{name}</p>
					<p className="price">
						{toCurrency(price)}
						<span className="unit"> / {unit}</span>
					</p>
				</div>
			</div>
			{isDesktop && (
				<div className="add-to-cart">
					<button onClick={handleAddToCartClick}>{t('Add to cart')}</button>
				</div>
			)}
		</Wrap>
	);
};

export default ProductItem;

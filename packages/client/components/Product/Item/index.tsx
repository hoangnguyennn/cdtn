import { FC, MouseEvent } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import useMatchMedia from '../../../hooks/useMatchMedia';

import { IProduct } from '../../../models';
import { toCurrency } from '../../../utils/formatter';
import ProductItemStyled from './ProductItem';

type ProductItemProps = IProduct;

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
	thumbnail,
	name,
	price,
	link,
}) => {
	const isDesktop = useMatchMedia('(min-width: 992px)');
	const { t } = useTranslation();

	const handleAddToCartClick = (event: MouseEvent<HTMLButtonElement>) => {
		event.stopPropagation();
	};

	return (
		<Wrap link={link}>
			<div className="wrap">
				<div className="thumbnail">
					<img src={thumbnail} alt={name} />
				</div>
				<div className="info">
					<p className="name">{name}</p>
					<p className="price">{toCurrency(price)}</p>
				</div>
			</div>
			{isDesktop ? (
				<div className="add-to-cart">
					<button onClick={handleAddToCartClick}>{t('Add to cart')}</button>
				</div>
			) : null}
		</Wrap>
	);
};

export default ProductItem;

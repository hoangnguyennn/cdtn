import { FC, MouseEvent } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import useMatchMedia from '../../../hooks/useMatchMedia';

import { Root } from './ProductItem';
import { toCurrency } from '../../../utils/formatter';
import { IProduct } from '../../../models';

type ProductItemProps = IProduct;

const ProductItem: FC<ProductItemProps> = ({
	thumbnail,
	name,
	price,
	link,
}: ProductItemProps) => {
	const { t } = useTranslation();
	const isDesktop = useMatchMedia('(min-width: 992px)');

	const handleAddToCartClick = (event: MouseEvent<HTMLButtonElement>) => {
		event.stopPropagation();
	};

	const Wrapper: FC = ({ children }) => {
		if (link) {
			return (
				<Link href={link}>
					<Root href={link}>{children}</Root>
				</Link>
			);
		} else {
			return <Root as="div">{children}</Root>;
		}
	};

	return (
		<Wrapper>
			<div className="wrap">
				<div className="thumbnail">
					<img src={thumbnail} alt="" />
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
		</Wrapper>
	);
};

export default ProductItem;

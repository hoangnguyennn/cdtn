import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

import { addToCart } from '../../../redux/reducers/cart';
import { IProduct } from '../../../interfaces/index';
import { PATH_NAME } from '../../../configs/pathName';
import Button from '../../core/Button';
import ProductItem from '../Item';
import ProductListStyled from './ProductList';

type ProductListProps = {
	columns: number;
	'lg-columns': number;
	title?: string;
	viewMore?: boolean;
	items: IProduct[];
	[key: string]: any;
};

const ProductList: FC<ProductListProps> = ({
	title,
	viewMore = true,
	items,
	...rest
}: ProductListProps) => {
	const { t } = useTranslation();
	const dispatch = useDispatch();

	return (
		<ProductListStyled hasTitle={!!title} {...rest}>
			{title ? <h3 className="title">{title}</h3> : null}
			{items.length ? (
				<div className="list">
					{items.map((product) => (
						<ProductItem
							key={product.id}
							link={`${PATH_NAME.PRODUCTS}/${product.id}`}
							addToCart={() => dispatch(addToCart({ ...product, qty: 1 }))}
							{...product}
						/>
					))}
				</div>
			) : (
				<div className="not-found-products">
					{t('There are no products to display')}
				</div>
			)}

			{viewMore ? (
				<div className="view-more">
					<Link href={PATH_NAME.PRODUCTS}>
						<Button as="a" href={PATH_NAME.PRODUCTS} shadow>
							{t('More products')}
						</Button>
					</Link>
				</div>
			) : null}
		</ProductListStyled>
	);
};

export default ProductList;

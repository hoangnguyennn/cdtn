import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

import { addToCart } from '../../../redux/reducers/cart';
import { IProduct } from '../../../interfaces/new_index';
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
			<div className="list">
				{items.map((product) => (
					<ProductItem
						id={product.id}
						key={product.id}
						link={`${PATH_NAME.PRODUCTS}/${product.id}`}
						thumbnail={product.images[0]}
						name={product.name}
						price={product.price}
						addToCart={() => dispatch(addToCart({ ...product, qty: 1 }))}
					/>
				))}
			</div>
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

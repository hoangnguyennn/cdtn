import { FC } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import { Root } from './ProductList';
import ProductItem from '../Item';
import { IProduct } from '../../../models';
import { PATH_NAME } from '../../../configs/pathName';

type ProductListProps = {
	columns: number;
	'lg-columns': number;
	title?: string;
	viewMore?: boolean;
	items: IProduct[];
};

const ProductList: FC<ProductListProps> = ({
	columns = 5,
	title,
	viewMore = true,
	items,
	...rest
}: ProductListProps) => {
	const { t } = useTranslation();

	return (
		<Root hasTitle={!!title} columns={columns} {...rest}>
			{title ? <h3 className="title">{title}</h3> : null}
			<div className="list">
				{items.map((product) => (
					<ProductItem
						key={product.id}
						link={`${PATH_NAME.PRODUCTS}/${product.id}`}
						thumbnail={product.thumbnail}
						name={product.name}
						price={product.price}
					/>
				))}
			</div>
			{viewMore ? (
				<div className="view-more">
					<Link href="/products">
						<a>{t('More products')}</a>
					</Link>
				</div>
			) : null}
		</Root>
	);
};

export default ProductList;

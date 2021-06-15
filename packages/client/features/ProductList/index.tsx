import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { IProduct } from '../../interfaces';
import ProductFilter from './components/Filter';
import ProductListComponent from '../../components/Product/List';
import Root from './ProductList';

type ProductListProps = {
	products: IProduct[];
	title?: string;
};

const ProductList: FC<ProductListProps> = ({
	products,
	title = 'Products',
}) => {
	const { t } = useTranslation();

	return (
		<Root>
			<ProductFilter className="filter" />
			<ProductListComponent
				columns={1}
				lg-columns={3}
				items={products}
				viewMore={false}
				title={t(title)}
				className="product-list"
			/>
		</Root>
	);
};

export default ProductList;

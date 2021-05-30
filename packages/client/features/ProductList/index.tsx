import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { default as ProductListComponent } from '../../components/Product/List';
import { getProducts } from '../../redux/reducers/product';
import ProductFilter from './components/Filter';
import Root from './ProductList';

const ProductList = () => {
	const products = useSelector(getProducts);
	const { t } = useTranslation();

	return (
		<Root>
			<ProductFilter className="filter" />
			<ProductListComponent
				columns={1}
				lg-columns={3}
				items={products}
				viewMore={false}
				title={t('Products')}
				className="product-list"
			/>
		</Root>
	);
};

export default ProductList;

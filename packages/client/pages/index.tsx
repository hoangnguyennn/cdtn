import { useTranslation } from 'react-i18next';

import MainLayout from '../layouts/MainLayout';
import ProductList from '../components/Product/List';
import Banner from '../components/Banner';

const HomePage = () => {
	const { t } = useTranslation();

	return (
		<MainLayout>
			<Banner />
			<div className="container">
				<ProductList
					columns={1}
					lg-columns={4}
					title={t('Trending products')}
				/>
			</div>
		</MainLayout>
	);
};

export default HomePage;

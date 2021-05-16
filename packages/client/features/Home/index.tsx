import { useTranslation } from 'react-i18next';

import { trendingProducts } from '../../configs/mockData';
import Container from '../../components/core/Container';
import HomeStyled from './Home';
import ProductList from '../../components/Product/List';

const Home = () => {
	const { t } = useTranslation();

	return (
		<HomeStyled>
			<Container>
				<ProductList
					columns={1}
					lg-columns={4}
					title={t('Trending products')}
					items={trendingProducts}
				/>
			</Container>
		</HomeStyled>
	);
};

export default Home;

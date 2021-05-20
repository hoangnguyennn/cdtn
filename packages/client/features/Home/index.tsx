import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { IProductResponse } from '../../interfaces';
import Container from '../../components/core/Container';
import HomeStyled from './Home';
import ProductList from '../../components/Product/List';

type HomeProps = {
	trendingProducts: IProductResponse[];
};

const Home: FC<HomeProps> = ({ trendingProducts }) => {
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

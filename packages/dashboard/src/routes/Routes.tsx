import { Fragment, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PATH_NAME } from '../configs';
import IRoute from '../interfaces/IRoute';

import MainLayout from '../layouts/MainLayout';

const Home = lazy(() => import('../features/Home'));
const ProductAdd = lazy(() => import('../features/ProductAdd'));
const ProductList = lazy(() => import('../features/ProductList'));

const routesConfig: IRoute[] = [
	{
		exact: true,
		path: '/',
		component: Home,
		layout: MainLayout,
	},
	{
		path: PATH_NAME.PRODUCT_ADD,
		component: ProductAdd,
		layout: MainLayout,
	},
	{
		path: PATH_NAME.PRODUCT_LIST,
		component: ProductList,
		layout: MainLayout,
	},
];

const renderRoutes = (routes: IRoute[]) => {
	return (
		<Router>
			<Switch>
				{routes.map((route, index) => {
					const Layout = route.layout || Fragment;
					const Component = route.component;

					return (
						<Route
							key={`routes-${index}`}
							path={route.path}
							exact={route.exact}
							render={(props) => (
								<Layout>
									<Component {...props} />
								</Layout>
							)}
						/>
					);
				})}
			</Switch>
		</Router>
	);
};

const Routes = () => {
	return renderRoutes(routesConfig);
};

export default Routes;

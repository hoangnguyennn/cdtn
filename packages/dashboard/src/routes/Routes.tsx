import { Fragment, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PATH_NAME } from '../configs';
import Auth from '../guards/Auth';
import IRoute from '../interfaces/IRoute';

import MainLayout from '../layouts/MainLayout';

const Home = lazy(() => import('../features/Home'));
const Login = lazy(() => import('../features/Login'));
const ProductAdd = lazy(() => import('../features/ProductAdd'));
const ProductList = lazy(() => import('../features/ProductList'));
const ProductUnitList = lazy(() => import('../features/ProductUnitList'));
const ProductUnitAdd = lazy(() => import('../features/ProductUnitAdd'));

const routesConfig: IRoute[] = [
	{
		exact: true,
		path: PATH_NAME.HOME,
		guard: Auth,
		layout: MainLayout,
		component: Home,
	},
	{
		path: PATH_NAME.PRODUCT_ADD,
		guard: Auth,
		layout: MainLayout,
		component: ProductAdd,
	},
	{
		path: PATH_NAME.PRODUCT_LIST,
		guard: Auth,
		layout: MainLayout,
		component: ProductList,
	},
	{
		path: PATH_NAME.PRODUCT_UNIT_LIST,
		guard: Auth,
		layout: MainLayout,
		component: ProductUnitList,
	},
	{
		path: PATH_NAME.PRODUCT_UNIT_ADD,
		guard: Auth,
		layout: MainLayout,
		component: ProductUnitAdd,
	},
	{
		path: PATH_NAME.LOGIN,
		component: Login,
	},
];

const renderRoutes = (routes: IRoute[]) => {
	return (
		<Router>
			<Suspense fallback={<div />}>
				<Switch>
					{routes.map((route, index) => {
						const Layout = route.layout || Fragment;
						const Component = route.component;
						const Guard = route.guard || Fragment;

						return (
							<Route
								key={`routes-${index}`}
								path={route.path}
								exact={route.exact}
								render={(props) => (
									<Guard>
										<Layout>
											<Component {...props} />
										</Layout>
									</Guard>
								)}
							/>
						);
					})}
				</Switch>
			</Suspense>
		</Router>
	);
};

const Routes = () => {
	return renderRoutes(routesConfig);
};

export default Routes;

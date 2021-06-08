import { Fragment, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PATH_NAME } from '../configs';
import Auth from '../guards/Auth';
import IRoute from '../interfaces/IRoute';

import MainLayout from '../layouts/MainLayout';

import {
	Dashboard as DashboardBR,
	ProductAdd as ProductAddBR,
	ProductEdit as ProductEditBR,
	ProductList as ProductListBR,
	ProductUnitAdd as ProductUnitAddBR,
	ProductUnitEdit as ProductUnitEditBR,
	ProductUnitList as ProductUnitListBR,
	OrderList as OrderListBR,
} from '../configs/breadcrumb';

const Home = lazy(() => import('../features/Home'));
const Login = lazy(() => import('../features/Login'));
const OrderList = lazy(() => import('../features/OrderList'));
const ProductAdd = lazy(() => import('../features/ProductAdd'));
const ProductEdit = lazy(() => import('../features/ProductEdit'));
const ProductList = lazy(() => import('../features/ProductList'));
const ProductUnitAdd = lazy(() => import('../features/ProductUnitAdd'));
const ProductUnitEdit = lazy(() => import('../features/ProductUnitEdit'));
const ProductUnitList = lazy(() => import('../features/ProductUnitList'));

const routesConfig: IRoute[] = [
	{
		exact: true,
		path: PATH_NAME.HOME,
		guard: Auth,
		layout: MainLayout,
		component: Home,
		breadcrumb: DashboardBR(),
	},
	{
		path: PATH_NAME.PRODUCT_ADD,
		guard: Auth,
		layout: MainLayout,
		component: ProductAdd,
		breadcrumb: ProductAddBR(),
	},
	{
		path: PATH_NAME.PRODUCT_EDIT,
		guard: Auth,
		layout: MainLayout,
		component: ProductEdit,
		breadcrumb: ProductEditBR(),
	},
	{
		path: PATH_NAME.PRODUCT_LIST,
		guard: Auth,
		layout: MainLayout,
		component: ProductList,
		breadcrumb: ProductListBR(),
	},
	{
		path: PATH_NAME.PRODUCT_UNIT_ADD,
		guard: Auth,
		layout: MainLayout,
		component: ProductUnitAdd,
		breadcrumb: ProductUnitAddBR(),
	},
	{
		path: PATH_NAME.PRODUCT_UNIT_EDIT,
		guard: Auth,
		layout: MainLayout,
		component: ProductUnitEdit,
		breadcrumb: ProductUnitEditBR(),
	},
	{
		path: PATH_NAME.PRODUCT_UNIT_LIST,
		guard: Auth,
		layout: MainLayout,
		component: ProductUnitList,
		breadcrumb: ProductUnitListBR(),
	},
	{
		path: PATH_NAME.ORDER_LIST,
		guard: Auth,
		layout: MainLayout,
		component: OrderList,
		breadcrumb: OrderListBR(),
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
						const breadcrumb = route.breadcrumb || [];
						const layoutProps = { breadcrumb };

						return (
							<Route
								key={`routes-${index}`}
								path={route.path}
								exact={route.exact}
								render={(props) => (
									<Guard>
										{route.layout ? (
											<Layout {...layoutProps}>
												<Component {...props} />
											</Layout>
										) : (
											<Layout>
												<Component {...props} />
											</Layout>
										)}
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

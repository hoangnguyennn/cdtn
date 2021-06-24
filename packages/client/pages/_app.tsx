import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import NProgress from 'nprogress';
import Router from 'next/router';
import type { AppProps } from 'next/app';

import { getLimitOfToast } from '../redux/reducers/app';
import Auth from '../guards/Auth';
import useStore from '../redux/store';

import '../locales';
import '../assets/styles/index.scss';
import 'react-quill/dist/quill.snow.css';
import Seo from '../components/Seo';

Router.events.on('routeChangeStart', (url) => {
	console.log(`Loading: ${url}`);
	NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const MyApp = ({ Component, pageProps }: AppProps) => {
	const store = useStore(pageProps.initialReduxState);

	return (
		<Provider store={store}>
			<Auth>
				<Seo title={pageProps.title} />
				<Component {...pageProps} />
			</Auth>
			<ToastContainer limit={getLimitOfToast()(store.getState())} />
		</Provider>
	);
};

export default MyApp;

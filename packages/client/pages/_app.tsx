import type { AppProps } from 'next/app';
import Router from 'next/router';
import NProgress from 'nprogress';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import store from '../redux/store';

import '../locales';
import '../assets/styles/index.scss';

Router.events.on('routeChangeStart', (url) => {
	console.log(`Loading: ${url}`);
	NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<Provider store={store}>
			<Component {...pageProps} />
			<ToastContainer />
		</Provider>
	);
};

export default MyApp;

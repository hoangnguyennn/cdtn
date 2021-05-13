import type { AppProps } from 'next/app';

import '../assets/styles/index.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
	return <Component {...pageProps} />;
};

export default MyApp;

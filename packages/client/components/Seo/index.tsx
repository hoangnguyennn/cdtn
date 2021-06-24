import Head from 'next/head';
import { FC } from 'react';

type SeoProps = {
	title?: string;
};

const Seo: FC<SeoProps> = ({ title }) => {
	return (
		<Head>
			<title>{title ? `${title} | Vikinoko` : 'Vikinoko'}</title>
		</Head>
	);
};

export default Seo;

import Link from 'next/link';
// import { useMediaQuery } from 'react-responsive';

import { Root } from './Logo';

const Logo = () => {
	// const isDesktop = useMediaQuery({ query: '(min-width: 992px)' });

	return (
		<Root>
			<Link href="/">
				<a>
					Logo
					{/* {isDesktop ? (
						<img
							src="https://demo2.madrasthemes.com/cartzilla/wp-content/uploads/2020/03/logo-dark-1.png"
							alt=""
						/>
					) : (
						<img
							src="https://demo2.madrasthemes.com/cartzilla/wp-content/uploads/2020/04/logo-icon.png"
							alt=""
						/>
					)} */}
				</a>
			</Link>
		</Root>
	);
};

export default Logo;

import Link from 'next/link';
import { Root } from './Breadcrumb';

const Breadcrumb = () => {
	return (
		<Root>
			<ul className="list">
				<li className="item">
					<Link href="/">
						<a>Home</a>
					</Link>
				</li>
				<li className="item">
					<div className="icon czi-arrow-right"></div>
					<Link href="/">
						<a>Products</a>
					</Link>
				</li>
				<li className="item">
					<div className="icon czi-arrow-right"></div>
					<a>Nam bao ngu tuoi</a>
				</li>
			</ul>
		</Root>
	);
};

export default Breadcrumb;

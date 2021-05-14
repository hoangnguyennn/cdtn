import { FC } from 'react';
import Link from 'next/link';
import { Root } from './ProductList';
import ProductItem from '../Item';

type ProductListProps = {
	columns: number;
	'lg-columns': number;
	title?: string;
	viewMore?: boolean;
};

const ProductList: FC<ProductListProps> = ({
	columns = 5,
	title,
	viewMore = true,
	...rest
}: ProductListProps) => {
	return (
		<Root hasTitle={!!title} columns={columns} {...rest}>
			{title ? <h3 className="title">{title}</h3> : null}
			<div className="list">
				<ProductItem
					link="/products/1"
					thumbnail="http://vikinoko.com/resources/img/product-reishi.png"
					name="Nam bao ngu tuoi"
					price={300000}
				/>
				<ProductItem
					link="/products/1"
					thumbnail="http://vikinoko.com/resources/img/product-reishi.png"
					name="Nam bao ngu tuoi"
					price={300000}
				/>
				<ProductItem
					link="/products/1"
					thumbnail="http://vikinoko.com/resources/img/product-reishi.png"
					name="Nam bao ngu tuoi"
					price={300000}
				/>
				<ProductItem
					link="/products/1"
					thumbnail="http://vikinoko.com/resources/img/product-reishi.png"
					name="Nam bao ngu tuoi"
					price={300000}
				/>
				<ProductItem
					link="/products/1"
					thumbnail="http://vikinoko.com/resources/img/product-reishi.png"
					name="Nam bao ngu tuoi"
					price={300000}
				/>
				<ProductItem
					link="/products/1"
					thumbnail="http://vikinoko.com/resources/img/product-reishi.png"
					name="Nam bao ngu tuoi"
					price={300000}
				/>
				<ProductItem
					link="/products/1"
					thumbnail="http://vikinoko.com/resources/img/product-reishi.png"
					name="Nam bao ngu tuoi"
					price={300000}
				/>
				<ProductItem
					link="/products/1"
					thumbnail="http://vikinoko.com/resources/img/product-reishi.png"
					name="Nam bao ngu tuoi"
					price={300000}
				/>
			</div>
			{viewMore ? (
				<div className="view-more">
					<Link href="/products">
						<a>More products</a>
					</Link>
				</div>
			) : null}
		</Root>
	);
};

export default ProductList;

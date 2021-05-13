import { FC } from 'react';
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
					thumbnail="https://demo2.madrasthemes.com/cartzilla/wp-content/uploads/2020/03/2-1-350x326.jpg"
					name="Nam bao ngu tuoi"
					price={300000}
				/>
				<ProductItem
					thumbnail="https://demo2.madrasthemes.com/cartzilla/wp-content/uploads/2020/03/2-1-350x326.jpg"
					name="Nam bao ngu tuoi"
					price={300000}
				/>
				<ProductItem
					thumbnail="https://demo2.madrasthemes.com/cartzilla/wp-content/uploads/2020/03/2-1-350x326.jpg"
					name="Nam bao ngu tuoi"
					price={300000}
				/>
				<ProductItem
					thumbnail="https://demo2.madrasthemes.com/cartzilla/wp-content/uploads/2020/03/2-1-350x326.jpg"
					name="Nam bao ngu tuoi"
					price={300000}
				/>
				<ProductItem
					thumbnail="https://demo2.madrasthemes.com/cartzilla/wp-content/uploads/2020/03/2-1-350x326.jpg"
					name="Nam bao ngu tuoi"
					price={300000}
				/>
				<ProductItem
					thumbnail="https://demo2.madrasthemes.com/cartzilla/wp-content/uploads/2020/03/2-1-350x326.jpg"
					name="Nam bao ngu tuoi"
					price={300000}
				/>
				<ProductItem
					thumbnail="https://demo2.madrasthemes.com/cartzilla/wp-content/uploads/2020/03/2-1-350x326.jpg"
					name="Nam bao ngu tuoi"
					price={300000}
				/>
				<ProductItem
					thumbnail="https://demo2.madrasthemes.com/cartzilla/wp-content/uploads/2020/03/2-1-350x326.jpg"
					name="Nam bao ngu tuoi"
					price={300000}
				/>
			</div>
			{viewMore ? (
				<div className="view-more">
					<button>More products</button>
				</div>
			) : null}
		</Root>
	);
};

export default ProductList;

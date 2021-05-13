import { FC, MouseEvent } from 'react';
import Link from 'next/link';

import { Root } from './ProductItem';

type ProductItemProps = {
	thumbnail: string;
	name: string;
	price: number;
	link?: string;
};

const ProductItem: FC<ProductItemProps> = ({
	thumbnail,
	name,
	price,
	link,
}: ProductItemProps) => {
	const handleAddToCartClick = (event: MouseEvent<HTMLButtonElement>) => {
		event.stopPropagation();
	};

	const Wrapper: FC = ({ children }) => {
		if (link) {
			return (
				<Link href={link}>
					<Root href={link}>{children}</Root>
				</Link>
			);
		} else {
			return <Root as="div">{children}</Root>;
		}
	};

	return (
		<Wrapper>
			<div className="thumbnail">
				<img src={thumbnail} alt="" />
			</div>
			<div className="info">
				<p className="name">{name}</p>
				<p className="price">{price}</p>
			</div>
			<div className="add-to-cart">
				<button onClick={handleAddToCartClick}>Add to cart</button>
			</div>
		</Wrapper>
	);
};

export default ProductItem;

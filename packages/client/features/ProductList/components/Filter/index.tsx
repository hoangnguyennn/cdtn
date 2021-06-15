import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import {
	ChangeEvent,
	Dispatch,
	FC,
	KeyboardEvent,
	MouseEvent,
	SetStateAction,
	useEffect,
	useState,
} from 'react';
import { useTranslation } from 'react-i18next';

import { numberWithDot } from '../../../../utils/formatter';
import { removeFalsyFields } from '../../../../utils/converter';
import { sameObject } from '../../../../utils/comparison';

import Root from './Filter';

import { getCategories } from '../../../../redux/reducers/category';

type ProductFilterProps = {
	[key: string]: any;
};

const ProductFilter: FC<ProductFilterProps> = ({ className }) => {
	const { t } = useTranslation();
	const router = useRouter();
	const categories = useSelector(getCategories());

	const [productName, setProductName] = useState('');
	const [priceFrom, setPriceFrom] = useState('0');
	const [priceTo, setPriceTo] = useState('0');

	const setPrice = (
		event: ChangeEvent<HTMLInputElement>,
		setState: Dispatch<SetStateAction<any>>
	) => {
		const value = event.target.value.split('.').join('');

		if (value.length === 0) {
			setState('0');
		} else {
			setState(String(Number(value)));
		}
	};

	const clearAllFilter = () => {
		const query = { category: router.query.category };
		if (sameObject(query, router.query)) {
			return;
		}

		router.push({ query });
	};

	const disableKeyPressCharacter = (event: KeyboardEvent<HTMLInputElement>) => {
		if (isNaN(Number(event.key))) {
			event.preventDefault();
		}
	};

	const filterByName = () => {
		if (!productName.length) {
			return;
		}

		const query = removeFalsyFields({
			...router.query,
			name: productName,
		});

		if (sameObject(query, router.query)) {
			return;
		}

		router.push({ query });
	};

	const filterByPrice = (event: MouseEvent) => {
		event.preventDefault();
		let priceFilter = undefined;
		if (!isNaN(Number(priceFrom)) && !isNaN(Number(priceTo))) {
			priceFilter = `${priceFrom}-${priceTo}`;

			if (Number(priceFrom) > Number(priceTo)) {
				priceFilter = `${priceTo}-${priceFrom}`;
			}
		}

		const query = removeFalsyFields({
			...router.query,
			price: priceFilter,
		});

		if (sameObject(query, router.query)) {
			return;
		}

		router.push({ query });
	};

	const handleInputNameKeyPress = (event: KeyboardEvent) => {
		if (event.key === 'Enter') {
			event.preventDefault();
			filterByName();
		}
	};

	useEffect(() => {
		let { price } = router.query;

		if (price) {
			if (price instanceof Array) {
				price = price[0];
			}

			const priceSplit = price.split('-');
			setPriceFrom(String(Number(priceSplit[0]) || 0));
			setPriceTo(String(Number(priceSplit[1]) || 0));
		} else {
			setPriceFrom('0');
			setPriceTo('0');
		}
	}, [JSON.stringify(router.query)]);

	return (
		<Root
			className={className}
			onSubmit={() => false}
			method="post"
			name="form"
		>
			<div className="filter-item">
				<button className="delete-all" type="button" onClick={clearAllFilter}>
					{t('Delete all')}
				</button>
			</div>
			<div className="filter-item">
				<h4 className="title">{t('Product name')}</h4>
				<div className="product-name">
					<input
						name="name"
						value={productName}
						onChange={(event) => setProductName(event.target.value)}
						onKeyPress={handleInputNameKeyPress}
						placeholder={t('Enter product name')}
					/>
				</div>
			</div>
			<div className="filter-item">
				<h4 className="title">{t('Category')}</h4>
				<ul className="categories">
					{categories.map((category) => (
						<li key={category.id}>
							<Link href={`/${category.slug}`}>
								<a>
									{category.name} ({category.productsLength})
								</a>
							</Link>
						</li>
					))}
				</ul>
			</div>
			<div className="filter-item">
				<h4 className="title">{t('Layered')}</h4>
				<div className="product-units"></div>
			</div>
			<div className="filter-item">
				<h4 className="title">{t('Price')}</h4>
				<div className="price-small-text">{t('Select price range')}</div>
				<div className="price-range">
					<input
						value={numberWithDot(priceFrom)}
						onChange={(event) => setPrice(event, setPriceFrom)}
						onKeyPress={disableKeyPressCharacter}
						onPaste={() => false}
					/>
					<span>&nbsp;-&nbsp;</span>
					<input
						value={numberWithDot(priceTo)}
						onChange={(event) => setPrice(event, setPriceTo)}
						onKeyPress={disableKeyPressCharacter}
						onPaste={() => false}
					/>
				</div>
				<button className="submit-filter-price" onClick={filterByPrice}>
					{t('Apply')}
				</button>
			</div>
		</Root>
	);
};

export default ProductFilter;

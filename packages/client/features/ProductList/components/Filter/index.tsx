import { useRouter } from 'next/router';
import {
	ChangeEvent,
	Dispatch,
	FC,
	FormEvent,
	KeyboardEvent,
	SetStateAction,
	useEffect,
	useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { PATH_NAME } from '../../../../configs/pathName';
import { numberWithDot } from '../../../../utils/formatter';

import Root from './Filter';

type ProductFilterProps = {
	[key: string]: any;
};

const ProductFilter: FC<ProductFilterProps> = ({ className }) => {
	const { t } = useTranslation();
	const router = useRouter();

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

	const disableKeyPressCharacter = (event: KeyboardEvent<HTMLInputElement>) => {
		if (isNaN(Number(event.key))) {
			event.preventDefault();
		}
	};

	const filter = (event: FormEvent) => {
		event.preventDefault();

		router.push({
			pathname: PATH_NAME.PRODUCTS,
			query: {
				price: `${priceFrom}-${priceTo}`,
			},
		});
	};

	const clearAllFilter = () => {
		router.push({ pathname: PATH_NAME.PRODUCTS, query: {} });
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
		<Root className={className} onSubmit={filter} method="post">
			<div className="filter-item">
				<button className="delete-all" type="button" onClick={clearAllFilter}>
					{t('Delete all')}
				</button>
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
				<button className="submit-filter-price" type="submit">
					{t('Apply')}
				</button>
			</div>
		</Root>
	);
};

export default ProductFilter;

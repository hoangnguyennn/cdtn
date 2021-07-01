import {
  FC,
  MouseEvent,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

import useMatchMedia from '../../../hooks/useMatchMedia';

import { imageUrlToSpecificSize } from '../../../utils/converter';
import { IProductWithLink } from '../../../interfaces';
import { toCurrency } from '../../../utils/formatter';
import ProductItemStyled from './ProductItem';

type ProductItemProps = IProductWithLink & {
  addToCart: () => any;
};

const Wrap: FC<{ link?: string }> = ({ children, link }) => {
  if (link) {
    return (
      <Link href={link}>
        <ProductItemStyled href={link}>{children}</ProductItemStyled>
      </Link>
    );
  }

  return <ProductItemStyled as="div">{children}</ProductItemStyled>;
};

const ProductItem: FC<ProductItemProps> = ({
  link,
  name,
  price,
  images,
  unit,
  addToCart
}) => {
  const { t } = useTranslation();
  const isDesktop = useMatchMedia('(min-width: 992px)');
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [imageSize, setImageSize] = useState(0);

  const imageUrl = useCallback(
    (image: string) => imageUrlToSpecificSize(image, imageSize, imageSize),
    [imageSize]
  );

  const handleAddToCartClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    addToCart();
  };

  useEffect(() => {
    if (imageRef.current?.offsetWidth) {
      setImageSize(imageRef.current?.offsetWidth);
    }
  }, [imageRef]);

  return (
    <Wrap link={link}>
      <div className="wrap">
        <div className="thumbnail" ref={imageRef}>
          <img
            src={imageUrl(images[0] || '')}
            alt={name}
            loading="lazy"
            style={{
              width: `${imageSize}px`,
              height: `${imageSize}px`,
              paddingTop: imageUrl(images[0] || '') ? '' : '100%'
            }}
          />
        </div>
        <div className="info">
          <p className="name">{name}</p>
          <p className="price">
            {toCurrency(price)}
            <span className="unit"> / {unit}</span>
          </p>
        </div>
      </div>
      {isDesktop && (
        <div className="add-to-cart">
          <button onClick={handleAddToCartClick}>{t('Add to cart')}</button>
        </div>
      )}
    </Wrap>
  );
};

export default ProductItem;

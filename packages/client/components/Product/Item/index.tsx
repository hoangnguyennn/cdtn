import { FC, MouseEvent, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

import useMatchMedia from '../../../hooks/useMatchMedia';

import { IProductWithLink } from '../../../interfaces';
import { toCurrency } from '../../../utils/formatter';
import ProductItemStyled from './ProductItem';
import { imageUrlToSpecificSize } from '../../../utils/converter';

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
  const isDesktop = useMatchMedia('(min-width: 992px)');
  const { t } = useTranslation();
  const thumbnailRef = useRef<HTMLDivElement | null>(null);
  const [imgSize, setImgSize] = useState({ width: 0, height: 0 });

  const handleAddToCartClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    addToCart();
  };

  useEffect(() => {
    const thumbnail = thumbnailRef.current;
    if (thumbnail) {
      setImgSize({
        width: thumbnail.offsetWidth,
        height: thumbnail.offsetWidth
      });
    }
  }, [thumbnailRef.current]);

  return (
    <Wrap link={link}>
      <div className="wrap">
        <div className="thumbnail" ref={thumbnailRef}>
          <img
            src={imageUrlToSpecificSize(
              images[0],
              imgSize.width,
              imgSize.height
            )}
            alt={name}
            loading="lazy"
            style={{ width: imgSize.width, height: imgSize.height }}
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

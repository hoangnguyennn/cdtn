import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import Image from 'next/image';

import { PATH_NAME } from '../../configs/pathName';
import BannerStyled from './Banner';
import Button from '../core/Button';
import Container from '../core/Container';

type BannerProps = {
  background?: StaticImageData;
};

const Banner: FC<BannerProps> = ({ background }) => {
  const { t } = useTranslation();

  return (
    <BannerStyled>
      <Image
        alt="Banner"
        src={background}
        layout="fill"
        objectFit="cover"
        quality={100}
        className="background"
      />
      <Container>
        <div className="intro">
          <h2 className="title">{t('Slogan')}</h2>
          <div className="actions">
            <Link href={PATH_NAME.PRODUCTS}>
              <Button as="a" href={PATH_NAME.PRODUCTS} shadow inline>
                {t('Shop Now')}
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </BannerStyled>
  );
};

export default Banner;

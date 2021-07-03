import Link from 'next/link';
import Image from 'next/image';

import Container from '../../components/core/Container';
import sadIcon from '../../assets/images/sad.png';
import Root from './NotFound';
import Button from '../../components/core/Button';
import { PATH_NAME } from '../../configs/pathName';

const NotFound = () => {
  return (
    <Root>
      <Container>
        <div className="content">
          <Image src={sadIcon} alt="Not found" loading="lazy" />
          <h2>404</h2>
          <p>
            Xin lỗi, trang bạn tìm kiếm không tồn tại!
            <br />
            Có thể URL đã bị hỏng hoặc đã bị quản trị viên xóa bỏ.
          </p>
          <Link href={PATH_NAME.HOME}>
            <Button
              as="a"
              href={PATH_NAME.HOME}
              inline
              variant="primary"
              className="back-to-home"
            >
              <i className="czi-home mr-1"></i> Quay lại trang chủ
            </Button>
          </Link>
        </div>
      </Container>
    </Root>
  );
};

export default NotFound;

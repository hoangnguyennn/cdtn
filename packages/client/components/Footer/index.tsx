import Container from '../core/Container';
import Widget from '../Widget';
import FooterStyled from './Footer';

import { widgets } from '../../configs/mockData';
import Row from '../core/Row';
import Col from '../core/Col';

const Footer = () => {
	return (
		<FooterStyled>
			<Container>
				<Row>
					<Col lg={6}>
						<Widget title="About us" list={widgets[0]} />
					</Col>
					<Col lg={6}>
						<Widget title="Account &amp; Shipping Info" list={widgets[0]} />
					</Col>
				</Row>
			</Container>
		</FooterStyled>
	);
};

export default Footer;

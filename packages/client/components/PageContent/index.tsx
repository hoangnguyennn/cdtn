import { FC } from 'react';
import Container from '../core/Container';
import PageContentStyled from './PageContent';

const PageContent: FC = ({ children }) => {
	return (
		<PageContentStyled>
			<Container>{children}</Container>
		</PageContentStyled>
	);
};

export default PageContent;

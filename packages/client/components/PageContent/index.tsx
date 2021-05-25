import { FC } from 'react';
import Container from '../core/Container';
import PageTitle, { PageTitleProps } from '../PageTitle';
import PageContentStyled from './PageContent';

type PageContentProps = PageTitleProps;

const PageContent: FC<PageContentProps> = ({ children, breadcrumb, title }) => {
	return (
		<>
			<PageTitle breadcrumb={breadcrumb} title={title} />
			<PageContentStyled>
				<Container>
					<div className="content">{children}</div>
				</Container>
			</PageContentStyled>
		</>
	);
};

export default PageContent;

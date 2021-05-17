import { FC } from 'react';

import { IBreadcrumb } from '../../interfaces';
import Breadcrumb from '../Breadcrumb';
import Container from '../core/Container';
import PageTitleStyled from './PageTitle';

type PageTitleProps = {
	breadcrumb: IBreadcrumb[];
	title: string;
};

const PageTitle: FC<PageTitleProps> = ({
	breadcrumb,
	title,
}: PageTitleProps) => {
	return (
		<PageTitleStyled>
			<Container>
				<Breadcrumb breadcrumb={breadcrumb} />
				<h3 className="title">{title}</h3>
			</Container>
		</PageTitleStyled>
	);
};

export default PageTitle;

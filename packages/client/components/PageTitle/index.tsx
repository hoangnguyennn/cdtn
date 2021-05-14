import { FC } from 'react';
import { IBreadcrumb } from '../../models';
import Breadcrumb from '../Breadcrumb';
import { Root } from './PageTitle';

type PageTitleProps = {
	breadcrumb: IBreadcrumb[];
	title: string;
};

const PageTitle: FC<PageTitleProps> = ({
	breadcrumb,
	title,
}: PageTitleProps) => {
	return (
		<Root>
			<div className="container">
				<Breadcrumb breadcrumb={breadcrumb} />
				<h3 className="title">{title}</h3>
			</div>
		</Root>
	);
};

export default PageTitle;

import Breadcrumb from '../Breadcrumb';
import { Root } from './PageTitle';

const PageTitle = () => {
	return (
		<Root>
			<div className="container">
				<Breadcrumb />
				<h3 className="title">Nam bao ngu tuoi</h3>
			</div>
		</Root>
	);
};

export default PageTitle;

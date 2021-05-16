import Link from 'next/link';
import { FC } from 'react';
import { IWidget } from '../../models';
import WidgetStyled from './Widget';

type WidgetProps = {
	title?: string;
	list: IWidget[];
};

const Widget: FC<WidgetProps> = ({ title, list }) => {
	return (
		<WidgetStyled>
			<h3 className="title">{title}</h3>
			<ul className="list">
				{list.map((item) => (
					<li key={item.id} className="item">
						<Link href={item.url}>
							<a>{item.title}</a>
						</Link>
					</li>
				))}
			</ul>
		</WidgetStyled>
	);
};

export default Widget;

import React from 'react';

export default interface IRoute {
	path?: string;
	exact?: boolean;
	layout?: React.FC;
	component?: any;
}

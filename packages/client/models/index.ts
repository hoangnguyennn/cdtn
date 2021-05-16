export type IBreadcrumb = {
	id: string;
	name: string;
	url: string;
};

export type IProduct = {
	id: string;
	name: string;
	price: number;
	thumbnail: string;
	link?: string;
};

export type IWidget = {
	id: string;
	title: string;
	url: string;
};

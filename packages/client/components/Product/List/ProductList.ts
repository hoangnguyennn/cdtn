import styled from 'styled-components';

type RootProps = {
	columns: number;
	'lg-columns': number;
	hasTitle?: boolean;
	[key: string]: any;
};

const ProductList = styled.div<RootProps>`
	.title {
		margin-bottom: 0.75rem;
		color: var(--main-text-color);
		font-size: 1.75rem;
		font-weight: 500;
		line-height: 1.2;
		text-align: center;
	}

	.list {
		padding-top: ${(props) => (props.hasTitle ? '1.5rem' : '0')};
		display: flex;
		flex-wrap: wrap;

		> * {
			width: calc(100% / ${(props) => props.columns});
		}
	}

	.view-more {
		padding-top: 1rem;
		text-align: center;

		a {
			text-decoration: none;
		}
	}

	@media (min-width: 992px) {
		padding-top: ${(props) => (props.hasTitle ? '1rem' : '0')};

		.list {
			> * {
				width: calc(100% / ${(props) => props['lg-columns']});
			}
		}
	}
`;

ProductList.defaultProps = {
	columns: 1,
	'lg-columns': 5,
	hasTitle: false,
};

export default ProductList;

import styled from 'styled-components';

type RootProps = {
	columns: number;
	'lg-columns': number;
	hasTitle?: boolean;
};

const Root = styled.div<RootProps>`
	.title {
		margin-bottom: 0.75rem;
		color: var(--main-text-color);
		font-size: 1.75rem;
		font-weight: 500;
		line-height: 1.2;
		text-align: center;
	}

	.list {
		padding-top: ${(props) => (props.hasTitle ? '24px' : '0')};
		display: flex;
		flex-wrap: wrap;

		> * {
			width: calc(100% / ${(props) => props.columns});
		}
	}

	.view-more {
		padding-top: 1rem;
		text-align: center;

		> * {
			margin-bottom: 0.5rem;
			padding: 0.625rem 1.375rem;
			background-color: transparent;
			color: var(--primary);
			font-size: 1rem;
			text-decoration: none;
			border: 1px solid var(--primary);
			border-radius: 2px;
			cursor: pointer;

			&:hover {
				background-color: var(--primary);
				color: var(--white);
			}
		}
	}

	@media (min-width: 992px) {
		padding-top: 1rem;
		padding-bottom: 3rem;

		.list {
			> * {
				width: calc(100% / ${(props) => props['lg-columns']});
			}
		}
	}
`;

export { Root };

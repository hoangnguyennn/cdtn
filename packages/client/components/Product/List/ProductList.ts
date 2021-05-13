import styled from 'styled-components';

type RootProps = {
	columns: number;
	'lg-columns': number;
	hasTitle?: boolean;
};

const Root = styled.div<RootProps>`
	.title {
		margin-bottom: 0.75rem;
		color: var(--dark);
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

		button {
			margin-bottom: 0.5rem;
			padding: 0.625rem 1.373rem;
			background-color: transparent;
			color: var(--accent);
			border: 1px solid var(--accent);
			border-radius: 0.3125rem;
			cursor: pointer;

			&:hover {
				background-color: var(--accent);
				color: var(--light);
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

import styled from 'styled-components';

const Root = styled.div`
	margin-top: -4.875rem;
	margin-bottom: 3rem;

	.summary {
		padding: 1rem;
		background-color: var(--white);
		border-radius: 2px;
		box-shadow: 0 0.3rem 1.525rem -0.375rem rgba(0, 0, 0, 0.1);
		display: flex;
		flex-direction: column;
	}

	.thumbnail {
		display: flex;

		img {
			width: 100%;
		}
	}

	.info {
		padding-top: 1.5rem;

		.price {
			margin-bottom: 1rem;
			color: var(--primary);
			font-size: 1.75rem;
		}

		.add-to-cart {
			margin-bottom: 1.875rem;
			display: flex;

			.qty {
				margin-right: 1rem;
				width: 5rem;

				input {
					padding: 0.625rem 1rem;
					width: 100%;
					height: 2.75rem;
					font-size: 0.9375rem;
					border: 1px solid #dae1e7;
					border-radius: 2px;
				}
			}

			button {
				flex: 1;
				background-color: var(--primary);
				color: var(--white);
				font-size: 0.9375rem;
				border: 1px solid var(--primary);
				border-radius: 2px;
				box-shadow: 0 0.5rem 1.125rem -0.5rem var(--primary-shadow);
				cursor: pointer;

				&:hover {
					background-color: var(--primary-hover);
					border-color: var(--primary-hover);
					box-shadow: none;
				}
			}
		}

		.description {
			padding: 1.25rem;
			font-size: 0.875rem;
			border: 1px solid #dae1e7;
			border-radius: 2px;

			.list {
				list-style-type: disc;
				padding-left: 1.25rem;
			}
		}
	}

	@media (min-width: 992px) {
		.summary {
			flex-direction: row;

			.thumbnail {
				flex: 1;
				margin-left: 10%;
				padding-top: 1.5rem;
				padding-bottom: 1.5rem;
			}

			.info {
				flex: 1;
				margin-left: 10%;
				padding-left: 1rem;
				padding-right: 1rem;
				display: flex;
				flex-direction: column;
			}
		}
	}
`;

export { Root };

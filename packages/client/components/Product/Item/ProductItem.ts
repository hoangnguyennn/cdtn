import styled from 'styled-components';

const Root = styled.a`
	margin-bottom: 1rem;
	padding-left: 0.5rem;
	padding-right: 0.5rem;
	padding-bottom: 0.875rem;
	width: 100%;
	text-decoration: none;
	border-bottom: 1px solid #e3e9ef;

	.thumbnail {
		display: flex;

		img {
			width: 100%;
			object-fit: contain;
		}
	}

	.info {
		padding: 0.5rem 1.25rem;

		.name {
			margin-bottom: 12px;
			color: var(--dark);
			font-size: 0.875rem;
			font-weight: 500;

			&:hover {
				color: var(--primary);
			}
		}

		.price {
			color: var(--accent);
			font-size: 0.9375rem;
		}
	}

	@media (min-width: 992px) {
		border-bottom-color: transparent;

		.add-to-cart {
			padding: 20px;
			visibility: hidden;
			opacity: 0;

			button {
				padding: 0.425rem 1rem;
				width: 100%;
				background-color: var(--primary);
				color: var(--light);
				font-size: 0.8125rem;
				line-height: 1.5;
				border: none;
				border-radius: 0.1875rem;
				outline: none;
				cursor: pointer;

				&:hover {
					background-color: var(--primary-hover);
				}
			}
		}

		&:hover {
			box-shadow: 0 0.3rem 1.525rem -0.375rem rgb(0 0 0 / 10%);
			z-index: 10;

			.add-to-cart {
				visibility: visible;
				opacity: 1;
			}
		}
	}
`;

export { Root };

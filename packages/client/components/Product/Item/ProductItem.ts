import styled from 'styled-components';

const Root = styled.a`
	margin-bottom: 1rem;
	padding: 1.25rem;
	width: 100%;
	text-decoration: none;
	border-bottom: 1px solid #e3e9ef;

	position: relative;

	.thumbnail {
		display: flex;

		img {
			width: 100%;
			object-fit: contain;
		}
	}

	.info {
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;

		.name {
			margin-bottom: 0.5rem;
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
		border-radius: 0.4375rem;

		.add-to-cart {
			position: absolute;
			top: 100%;
			left: 0;
			right: 0;
			padding-left: 1.25rem;
			padding-right: 1.25rem;
			padding-bottom: 1.25rem;
			height: 0;
			background-color: var(--light);
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
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
			box-shadow: 0 0.3rem 1.525rem -0.375rem rgb(0 0 0 / 0.5);
			z-index: 10;

			.add-to-cart {
				visibility: visible;
				opacity: 1;
				margin-top: -0.875rem;
				height: unset;
				box-shadow: 0 1.15rem 1.525rem -0.375rem rgb(0 0 0 / 0.5);
				border-top-left-radius: 0;
				border-top-right-radius: 0;
				border-bottom-left-radius: 0.4375rem;
				border-bottom-right-radius: 0.4375rem;
			}
		}
	}
`;

export { Root };

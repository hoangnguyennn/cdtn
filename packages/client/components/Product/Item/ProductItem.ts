import styled from 'styled-components';

export default styled.a`
	margin-bottom: 1rem;
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
			color: var(--main-text-color);
			font-size: 0.875rem;
			font-weight: 500;

			&:hover {
				color: var(--primary);
			}
		}

		.price {
			color: var(--primary);
			font-size: 0.9375rem;
		}
	}

	@media (min-width: 992px) {
		padding: 1.25rem;
		border-bottom-color: transparent;
		border-radius: 2px;

		.add-to-cart {
			position: absolute;
			top: 100%;
			left: 0;
			right: 0;
			padding-left: 1.25rem;
			padding-right: 1.25rem;
			padding-bottom: 1.25rem;
			height: 0;
			background-color: var(--white);
			visibility: hidden;
			opacity: 0;

			button {
				padding: 0.75rem 1.25rem;
				width: 100%;
				background-color: var(--primary);
				color: var(--white);
				font-size: 0.8125rem;
				font-weight: 400;
				line-height: 1.5;
				border: none;
				border-radius: 2px;
				outline: none;
				cursor: pointer;
				z-index: 1;

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
				border-bottom-left-radius: 2px;
				border-bottom-right-radius: 2px;
			}
		}
	}
`;

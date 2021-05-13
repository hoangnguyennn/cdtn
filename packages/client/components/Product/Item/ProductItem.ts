import styled from 'styled-components';

const Root = styled.a`
	margin-bottom: 16px;
	padding-left: 8px;
	padding-right: 8px;
	text-decoration: none;
	border-radius: 0.4375rem;

	display: flex;
	flex-direction: column;

	&:hover {
		box-shadow: 0 0.3rem 1.525rem -0.375rem rgb(0 0 0 / 10%);
		z-index: 10;

		.add-to-cart {
			visibility: visible;
			opacity: 1;
		}
	}

	.thumbnail {
		display: flex;

		img {
			width: 100%;
			object-fit: contain;
		}
	}

	.info {
		padding: 8px 20px;
	}

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
`;

export { Root };

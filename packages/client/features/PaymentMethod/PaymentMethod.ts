import styled from 'styled-components';

const Root = styled.div`
	margin-bottom: 3rem;
	padding: 1rem;
	background-color: var(--white);
	border-radius: 2px;
	box-shadow: 0 0.3rem 1.525rem -0.375rem rgb(0 0 0 / 10%);

	.title {
		margin-bottom: 1rem;
	}

	.payment-methods {
		.payment-method {
			margin-bottom: 1rem;
			padding: 0.625rem 1rem;
			display: flex;
			align-items: center;
			border: 1px solid var(--primary);

			input {
				display: none;
			}

			.icon {
				margin-right: 1.25rem;
				color: var(--primary);
			}

			h4 {
				font-weight: 400;
			}
		}
	}

	.checkout-actions {
		.checkout {
			padding: 0.75rem 1.25rem;
			width: 100%;
			background-color: var(--primary);
			color: var(--white);
			font-size: 0.8125rem;
			border: none;
			cursor: pointer;

			&:hover {
				background-color: var(--primary-hover);
			}
		}
	}
`;

export { Root };

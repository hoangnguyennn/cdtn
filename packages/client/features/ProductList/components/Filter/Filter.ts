import styled from 'styled-components';

export default styled.div`
	border-right: 1px solid #dae1e7;

	.filter-item {
		padding: 1rem 1rem 0.75rem 0;
		border-top: 1px solid #dae1e7;

		.title {
			padding-bottom: 0.875rem;
			font-size: 0.8125rem;
			font-weight: 500;
		}

		.price-small-text {
			padding-top: 0.3125rem;
			padding-bottom: 0.3125rem;
			font-size: 0.8125rem;
			color: var(--secondary);
		}

		.price-range {
			display: flex;
			justify-content: center;
			align-items: center;

			input {
				flex: 1;
				padding: 0 8px;
				width: 0;
				height: 30px;
				border: 1px solid #dae1e7;
				border-radius: 2px;
				outline: none;
			}
		}

		.submit-filter-price {
			margin-top: 0.5rem;
			padding: 0.3125rem 0.9375rem;
			background-color: var(--white);
			color: var(--primary);
			font-size: 0.75rem;
			border: 1px solid var(--primary);
			border-radius: 4px;
			cursor: pointer;
		}
	}
`;

import styled from 'styled-components';

const Root = styled.div`
	margin-top: -4.875rem;
	margin-bottom: 3rem;
	padding: 1rem;
	background-color: var(--white);
	border-radius: 2px;
	box-shadow: 0 0.3rem 1.525rem -0.375rem rgb(0 0 0 / 10%);
	display: flex;
	flex-direction: column;
	align-items: stretch;

	.item {
		display: flex;
		justify-content: space-between;
		align-items: center;

		&:not(:first-child) {
			padding-top: 1rem;
		}

		.price {
			color: var(--primary);
		}

		.total-price {
			font-size: 1.125rem;
			font-weight: 700;
		}
	}
`;

export { Root };

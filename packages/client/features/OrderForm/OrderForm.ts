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

	.order-form {
		display: flex;
		flex-direction: column;
		align-items: stretch;

		input,
		textarea,
		button {
			margin-top: 0.5rem;
			margin-bottom: 0.5rem;
			padding: 0.625rem 1.373rem;
			font-size: 1rem;
			border: 1px solid #dae1e7;
			border-radius: 2px;
		}
	}
`;

export { Root };

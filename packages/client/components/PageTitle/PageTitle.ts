import styled from 'styled-components';

const Root = styled.div`
	padding-top: 1.5rem;
	padding-bottom: 5.5rem;
	background-color: var(--dark);

	.container {
		padding: 1rem;
	}

	.title {
		color: var(--white);
		font-size: 1.75rem;
		font-weight: 500;
		line-height: 1.2;
		text-align: center;
	}

	@media (min-width: 992px) {
		.container {
			display: flex;
			flex-direction: row-reverse;
			justify-content: space-between;
			align-items: center;
		}
	}
`;

export { Root };

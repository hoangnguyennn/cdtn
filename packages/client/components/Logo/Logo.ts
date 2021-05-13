import styled from 'styled-components';

const Root = styled.div`
	margin-right: 0.5rem;
	padding-top: 0.65625rem;
	padding-bottom: 0.65625rem;
	width: 74px;

	a {
		display: flex;
		align-items: center;
		color: var(--dark);
		text-decoration: none;

		img {
			width: 100%;
		}
	}

	@media (min-width: 992px) {
		width: 142px;
	}
`;

export { Root };

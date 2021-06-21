import styled from 'styled-components';

export default styled.div`
	.content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		padding-top: 2rem;
		padding-bottom: 2rem;
		color: #373f50;

		img {
			width: 100%;
			height: 300px;
			margin-bottom: 3rem;
			object-fit: contain;
		}

		h2 {
			margin-bottom: 0.75rem;
		}

		p {
			margin-bottom: 1.5rem;
			text-align: center;
		}

		.back-to-home {
			&,
			& * {
				text-decoration: none;
			}
		}
	}

	@media (min-width: 992px) {
		padding-top: 3rem;
		padding-bottom: 3rem;
	}
`;

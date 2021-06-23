import styled from 'styled-components';

export default styled.footer`
	.footer-navigation {
		margin-top: 3rem;
		padding-top: 3rem;
		padding-bottom: 1.5rem;
		background-color: var(--dark);
	}

	.footer-copyright {
		padding-top: 3rem;
		padding-bottom: 1.5rem;
		background-color: var(--darker);
		color: var(--white);

		.copyright-text {
			display: flex;
			align-items: center;
		}

		.copyright {
			color: var(--white);
			text-decoration: none;

			&:hover {
				color: var(--gray);
				text-decoration: underline;
			}
		}

		.czi-heart {
			margin-left: 0.5rem;
			color: var(--danger-hover);
			text-decoration: none;
		}
	}
`;

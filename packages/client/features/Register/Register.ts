import styled from 'styled-components';

export default styled.div`
	.register-form {
		.submit-group {
			padding-top: 1rem;
			padding-bottom: 1rem;
		}
	}

	.sign-in {
		text-align: center;

		span {
			display: inline-block;
			margin-bottom: 0.5rem;
		}

		a {
			color: var(--primary);
			text-decoration: none;

			&:hover {
				color: var(--primary-hover);
			}
		}
	}

	@media (min-width: 992px) {
		.register-form {
			width: 40%;
			margin-left: auto;
			margin-right: auto;

			.submit {
				width: 50%;
				display: block;
				margin-left: auto;
				margin-right: auto;
			}
		}
	}
`;

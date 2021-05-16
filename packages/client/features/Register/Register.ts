import styled from 'styled-components';

export default styled.div`
	padding: 1rem;
	background-color: var(--white);
	border-radius: 2px;
	box-shadow: 0 0.3rem 1.525rem -0.375rem rgb(0 0 0 / 10%);

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

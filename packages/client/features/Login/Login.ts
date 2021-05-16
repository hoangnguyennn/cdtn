import styled from 'styled-components';

export default styled.div`
	padding: 1rem;
	background-color: var(--white);
	border-radius: 2px;
	box-shadow: 0 0.3rem 1.525rem -0.375rem rgb(0 0 0 / 10%);

	.login-form {
		.actions {
			display: flex;
			justify-content: space-between;
			align-items: center;

			a {
				color: var(--primary);
				text-decoration: none;

				&:hover {
					color: var(--primary-hover);
				}
			}
		}

		.sign-up {
			padding-top: 1rem;
			padding-bottom: 1rem;
			text-align: center;

			a {
				color: var(--primary);

				&:hover {
					color: var(--primary-hover);
				}
			}
		}
	}

	@media (min-width: 992px) {
		.login-form {
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

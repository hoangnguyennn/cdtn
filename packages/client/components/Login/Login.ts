import styled from 'styled-components';

const Root = styled.div`
	margin-top: 5rem;

	.container {
		display: flex;
		flex-direction: column;
		align-items: stretch;
	}

	.title {
		margin-bottom: 0.5rem;
		font-size: 1.75rem;
		font-weight: 400;
		text-align: center;
	}

	.login-form {
		display: flex;
		flex-direction: column;
		align-items: stretch;

		input,
		button {
			margin-top: 0.5rem;
			margin-bottom: 0.5rem;
			padding: 0.625rem 1.373rem;
			font-size: 1rem;
			border: 1px solid #dae1e7;
			border-radius: 2px;
		}

		.actions {
			margin-top: 0.5rem;
			margin-bottom: 0.5rem;
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

		.submit {
			background-color: var(--primary);
			color: var(--white);
			border-color: var(--primary);
			box-shadow: 0 0.5rem 1.125rem -0.5rem var(--primary-shadow);
			cursor: pointer;

			&:hover {
				background-color: var(--primary-hover);
				border-color: var(--primary-hover);
				box-shadow: unset;
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
				margin-left: auto;
				margin-right: auto;
			}
		}
	}
`;

export { Root };

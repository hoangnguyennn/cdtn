import styled from 'styled-components';

export default styled.div`
	cursor: pointer;

	.dropdown {
		.dropdown-menu {
			display: none;
			position: absolute;
			top: 4.5rem;
			left: 0;
			width: 100vw;
			padding-top: 0.75rem;
			padding-bottom: 0.75rem;
			background-color: white;

			.dropdown-item {
				display: block;
				padding: 0.375rem 0.75rem;
				font-size: 0.875rem;

				&,
				& a {
					color: var(--primary);
					text-decoration: none;
				}

				&:hover {
					background-color: var(--light-hover);

					&,
					& a {
						color: var(--primary-hover);
					}
				}
			}
		}

		&:hover {
			.dropdown-menu {
				display: block;
			}
		}
	}

	@media (min-width: 992px) {
		.dropdown {
			position: relative;

			.dropdown-menu {
				position: absolute;
				top: 100%;
				left: 50%;
				transform: translateX(-50%);
				width: 12.5rem;
				border: 0.0625rem solid var(--light);
				border-radius: 0.125rem;
			}
		}
	}
`;

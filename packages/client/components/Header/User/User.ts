import styled from 'styled-components';

export default styled.div`
	cursor: pointer;

	.dropdown {
		.dropdown-menu {
			display: none;
			position: absolute;
			top: 72px;
			left: 0;
			width: 100vw;
			padding-top: 12px;
			padding-bottom: 12px;
			background-color: white;

			.dropdown-item {
				display: block;
				padding: 6px 12px;
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
				width: 200px;
				border: 1px solid var(--light);
				border-radius: 2px;
			}
		}
	}
`;

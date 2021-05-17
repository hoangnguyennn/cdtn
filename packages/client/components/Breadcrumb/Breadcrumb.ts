import styled from 'styled-components';

export default styled.div`
	margin-bottom: 1rem;

	.list {
		display: flex;

		.item {
			display: flex;
			align-items: center;

			> * {
				color: var(--white);
				font-size: 0.8125rem;
				text-decoration: none;
			}

			&:last-child {
				a {
					color: rgba(255, 255, 255, 0.6);
				}
			}

			&:not(:first-child) {
				padding-left: 0.425rem;

				.icon {
					padding-right: 0.425rem;
					color: rgba(255, 255, 255, 0.6);
					font-size: 0.8rem;
				}
			}
		}
	}

	@media (min-width: 992px) {
		margin-bottom: 0;
	}
`;

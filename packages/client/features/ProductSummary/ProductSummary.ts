import styled from 'styled-components';

export default styled.div`
	display: flex;
	flex-direction: column;

	.thumbnail {
		display: flex;

		img {
			width: 100%;
		}
	}

	.info {
		padding-top: 1.5rem;

		.stop-business {
			margin-bottom: 1rem;
			padding: 1.25rem;
			color: var(--danger);
			font-size: 1.25rem;
			font-weight: 700;
			border: 2px solid var(--danger);
		}

		.price {
			margin-bottom: 1rem;
			color: var(--primary);
			font-size: 1.75rem;
		}

		.add-to-cart {
			margin-bottom: 1.875rem;
			display: flex;

			.qty {
				margin-right: 1rem;
				width: 7rem;

				input {
					padding: 0.625rem 1rem;
				}
			}
		}

		.description {
			padding: 1.25rem;
			font-size: 0.875rem;
			border: 1px solid #dae1e7;
			border-radius: 2px;

			.list {
				list-style-type: disc;
				padding-left: 1.25rem;
			}
		}
	}

	@media (min-width: 992px) {
		flex-direction: row;

		.thumbnail {
			flex: 1;
			margin-left: 10%;
			padding-top: 1.5rem;
			padding-bottom: 1.5rem;
		}

		.info {
			flex: 1;
			margin-left: 10%;
			padding-left: 1rem;
			padding-right: 1rem;
			display: flex;
			flex-direction: column;
		}
	}
`;

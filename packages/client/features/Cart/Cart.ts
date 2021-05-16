import styled from 'styled-components';
import FormGroup from '../../components/core/FormGroup';

export default styled.div`
	.cart-sidebar,
	.cart-main {
		margin-bottom: 3rem;
		padding: 1rem;
		background-color: var(--white);
		border-radius: 2px;
		box-shadow: 0 0.3rem 1.525rem -0.375rem rgb(0 0 0 / 10%);
	}

	.cart-sidebar {
		.cart-detail {
			.cart-item {
				padding-bottom: 0.5rem;
				border-bottom: 1px solid #dae1e7;
				display: flex;

				.thumbnail {
					width: 5rem;
					display: flex;

					img {
						width: 100%;
					}
				}

				.info {
					flex: 1;
					padding-left: 1rem;
					padding-right: 1rem;

					.name {
						margin-bottom: 0.625rem;
						font-size: 0.8125rem;
					}

					.qty {
						display: flex;

						span,
						input {
							width: 1.75rem;
							height: 1.75rem;
							border-top: 1px solid #eee;
							border-bottom: 1px solid #eee;

							display: flex;
							justify-content: center;
							align-items: center;
						}

						input {
							color: var(--primary);
							font-weight: 700;
							text-align: center;
							border-left: 1px solid #eee;
							border-right: 1px solid #eee;
						}

						.qty-decreace {
							border-left: 1px solid #eee;
						}

						.qty-increase {
							border-right: 1px solid #eee;
						}

						.qty-decreace,
						.qty-increase {
							cursor: pointer;
							user-select: none;

							&:hover {
								background-color: #aaa;
							}
						}
					}
				}

				.actions {
					align-self: stretch;
					display: flex;
					flex-direction: column;
					align-items: flex-end;

					.action {
						color: var(--main-text-color);
						font-size: 0.8125rem;

						&:hover {
							text-decoration: underline;
							cursor: pointer;
						}
					}

					.price {
						flex: 1;
						font-size: 0.8125rem;
						font-weight: 700;

						display: flex;
						align-items: flex-end;
					}
				}
			}
		}

		.cart-summary {
			margin-top: 1rem;

			${FormGroup} {
				display: flex;
				justify-content: space-between;
				align-items: flex-start;
			}

			.price {
				color: var(--primary);
			}

			.total-price {
				font-size: 1.125rem;
				font-weight: 700;
			}
		}
	}

	.cart-main {
		.checkout-information {
			margin-bottom: 3rem;
		}

		.payment-method {
			margin-bottom: 1rem;
			padding: 0.625rem 1rem;
			display: flex;
			align-items: center;
			border: 1px solid var(--primary);
			cursor: pointer;

			input {
				display: none;
			}

			.icon {
				margin-right: 1.25rem;
				color: var(--primary);
			}

			h4 {
				font-weight: 400;
			}
		}
	}

	@media (min-width: 992px) {
		padding: 1rem;
		background-color: var(--white);
		border-radius: 2px;
		box-shadow: 0 0.3rem 1.525rem -0.375rem rgb(0 0 0 / 10%);

		display: flex;
		flex-direction: row-reverse;
		align-items: flex-start;

		.cart-sidebar {
			flex: 2;
		}

		.cart-main {
			flex: 3;
			margin-right: 1rem;
		}

		.cart-sidebar,
		.cart-main {
			margin-bottom: 0;
			border: 1px solid #dae1e7;
			box-shadow: none;
		}
	}
`;

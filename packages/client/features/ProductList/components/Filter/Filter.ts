import styled from 'styled-components';
import Form from '../../../../components/core/Form';

export default styled(Form)`
	margin-right: 1rem;
	padding-right: 1rem;
	box-shadow: 1rem 0 1rem -1rem rgb(0 0 0 / 10%);

	.filter-item {
		padding: 1rem 0 0.75rem 0;
		border-top: 0.0625rem solid #dae1e7;

		.delete-all {
			background-color: transparent;
			color: var(--primary);
			font-size: 0.875rem;
			border: none;
			cursor: pointer;
			transition: all 0.3s linear, font-size 1ms, padding 1ms, margin 1ms,
				border 1ms;

			&:hover {
				text-decoration: underline;
			}
		}

		.product-name {
			display: flex;
			justify-content: center;
			align-items: center;

			input {
				flex: 1;
				padding: 0 0.5rem;
				height: 1.875rem;
				border: 0.0625rem solid #dae1e7;
				border-radius: 0.125rem;
				outline: none;
			}
		}

		.categories,
		.units {
			font-size: 0.875rem;

			li,
			a {
				color: var(--primary);
				text-decoration: none;
				cursor: pointer;
				transition: all 0.3s linear, font-size 1ms, padding 1ms, margin 1ms,
					border 1ms;

				&.active,
				&:hover,
				&.active a,
				&:hover a {
					color: var(--primary-hover);
					text-decoration: underline;
				}
			}
		}

		.title {
			padding-bottom: 0.875rem;
			font-size: 0.875rem;
			font-weight: 500;
		}

		.price-small-text {
			padding-top: 0.3125rem;
			padding-bottom: 0.3125rem;
			font-size: 0.875rem;
			color: var(--secondary);
		}

		.price-range {
			display: flex;
			justify-content: center;
			align-items: center;

			input {
				flex: 1;
				padding: 0 0.5rem;
				width: 0;
				height: 1.875rem;
				border: 0.0625rem solid #dae1e7;
				border-radius: 0.125rem;
				outline: none;
			}
		}

		.submit-filter-price {
			margin-top: 0.5rem;
			padding: 0.3125rem 0.9375rem;
			background-color: var(--white);
			color: var(--primary);
			font-size: 0.75rem;
			border: 0.0625rem solid var(--primary);
			border-radius: 0.25rem;
			cursor: pointer;
			transition: all 0.3s linear, font-size 1ms, padding 1ms, margin 1ms,
				border 1ms;

			&:hover {
				background-color: var(--primary);
				color: var(--white);
				border: 0.0625rem solid var(--white);
			}
		}
	}
`;

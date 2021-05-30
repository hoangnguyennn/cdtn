import styled from 'styled-components';

export default styled.div`
	overflow-x: auto;

	.order-list {
		width: 100%;
		border-collapse: collapse;

		tr {
			&:hover {
				background-color: var(--primary-shadow);
			}
		}

		th,
		td {
			padding: 1rem;
			font-size: 0.9375rem;
			font-weight: 400;
			text-align: left;
			border-bottom: 1px solid var(--light);

			&:last-child {
				text-align: right;
			}
		}
	}
`;

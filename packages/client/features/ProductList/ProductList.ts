import styled from 'styled-components';

export default styled.div`
	display: flex;

	@media (min-width: 992px) {
		/* margin-right: -1rem; */

		.filter {
			flex: 1;
			max-width: calc(100% / 4);
		}

		.product-list {
			flex: 3;
			max-width: calc(100% / 4 * 3);
		}
	}
`;

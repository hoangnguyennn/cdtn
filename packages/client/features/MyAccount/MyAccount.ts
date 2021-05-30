import styled from 'styled-components';

export default styled.div`
	display: flex;
	flex-direction: column;

	.user-info {
		margin-bottom: 3rem;
	}

	@media (min-width: 992px) {
		flex-direction: row;
		align-items: flex-start;

		.user-info,
		.update-password {
			padding: 1rem;
			margin-bottom: 0;
			border: 1px solid #dae1e7;
		}

		.user-info {
			flex: 2;
			margin-right: 1rem;
		}

		.update-password {
			flex: 1;
		}
	}
`;
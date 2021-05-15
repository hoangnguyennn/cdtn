import styled from 'styled-components';

const Root = styled.div`
	margin-bottom: 100px;
	height: 700px;
	background-image: linear-gradient(rgba(87, 87, 87, 0.53), rgba(13, 5, 1, 0.7)),
		url('http://vikinoko.com/resources/css/img/Mhero.jpg');
	background-size: cover;
	background-position: center;

	display: flex;
	align-items: center;

	.intro {
		.title {
			margin-bottom: 1rem;
			padding-bottom: 1rem;
			color: var(--white);
			font-size: 3rem;
		}

		.actions {
			.button {
				margin-bottom: 0.5rem;
				padding: 0.625rem 1.375rem;
				background-color: var(--primary);
				color: var(--white);
				font-size: 1rem;
				text-decoration: none;
				border: 1px solid var(--primary);
				border-radius: 2px;
				cursor: pointer;

				&:hover {
					background-color: var(--primary-hover);
					border-color: var(--primary-hover);
				}
			}
		}
	}
`;

export { Root };

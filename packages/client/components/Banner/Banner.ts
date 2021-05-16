import styled from 'styled-components';

type BannerProps = {
	background?: string;
};

export default styled.div<BannerProps>`
	margin-bottom: 100px;
	height: 700px;
	background-image: linear-gradient(rgba(87, 87, 87, 0.53), rgba(13, 5, 1, 0.7)),
		url(${(props) => props.background});
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
			a {
				text-decoration: none;
			}
		}
	}
`;

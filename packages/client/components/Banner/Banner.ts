import styled from 'styled-components';

type BannerProps = {
	background?: string;
};

export default styled.div<BannerProps>`
	padding-top: 2rem;
	padding-bottom: 2rem;
	margin-bottom: 6.25rem;
	background-image: linear-gradient(rgba(87, 87, 87, 0.53), rgba(13, 5, 1, 0.7)),
		url(${(props) => props.background});
	background-size: cover;
	background-position: center;

	display: flex;
	align-items: center;

	.intro {
		.title {
			margin-bottom: 1rem;
			color: var(--white);
			font-size: 1.75rem;
			font-weight: 300;
		}

		.actions {
			a {
				display: inline-block;
				line-height: normal;
				text-decoration: none;
			}
		}
	}

	@media (min-width: 992px) {
		height: 43.75rem;

		.intro {
			.title {
				font-size: 3rem;
			}
		}
	}
`;

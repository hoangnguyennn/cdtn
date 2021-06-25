import styled from 'styled-components';
import Form from '../../components/core/Form';
import { mediaQueries } from '../../helpers/checkTypes';

export default styled(Form)`
	.actions {
		display: flex;
		justify-content: space-between;
		align-items: center;

		a {
			color: var(--primary);
			text-decoration: none;
			transition: all 0.3s linear;

			&:hover {
				color: var(--primary-hover);
			}
		}
	}

	.sign-up {
		padding-top: 1rem;
		text-align: center;

		a {
			color: var(--primary);
			transition: all 0.3s linear;

			&:hover {
				color: var(--primary-hover);
			}
		}
	}

	${mediaQueries('lg')} {
		width: 40%;
		margin-left: auto;
		margin-right: auto;

		.submit {
			width: 50%;
			display: block;
			margin-left: auto;
			margin-right: auto;
		}
	}
`;

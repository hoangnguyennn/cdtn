import styled from 'styled-components';
import { Variant } from '../../../interfaces/types';

type AlertProps = {
	variant?: Variant;
};

const Alert = styled.div<AlertProps>`
	padding: 0.625rem 1.373rem;
	width: 100%;
	color: var(--${(props) => props.variant});
	font-size: 1rem;
	border: 1px solid var(--${(props) => props.variant});
	border-radius: 2px;

	> * {
		color: var(--primary);
	}

	a {
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}
`;

Alert.defaultProps = {
	variant: Variant.gray,
};

export default Alert;

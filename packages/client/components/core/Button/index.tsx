import styled from 'styled-components';
import { Variant } from '../../../interfaces/types';

type ButtonProps = {
	variant?: Variant;
	shadow?: boolean;
	inline?: boolean;
};

const renderShadow = (shadow?: boolean, variant?: Variant) => {
	if (shadow) {
		return `0 0.5rem 1.125rem -0.5rem var(--${variant}-shadow)`;
	}

	return 'unset';
};

const Button = styled.button<ButtonProps>`
	padding: 0.625rem 1.373rem;
	width: ${(props) => (props.inline ? '' : '100%')};
	background-color: var(--${(props) => props.variant});
	color: var(--white);
	font-size: 1rem;
	text-align: center;
	border: 0.0625rem solid var(--${(props) => props.variant});
	border-radius: 0.375rem;
	box-shadow: ${(props) => renderShadow(props.shadow, props.variant)};
	cursor: pointer;
	transition: all 0.3s linear;

	&:hover {
		background-color: var(--${(props) => props.variant}-hover);
		border-color: var(--${(props) => props.variant}-hover);
		box-shadow: unset;
	}

	&:disabled {
		background-color: var(--gray);
		border-color: var(--gray);
		box-shadow: ${(props) => renderShadow(false, props.variant)};
		cursor: not-allowed;
	}
`;

Button.defaultProps = {
	variant: 'primary',
	shadow: false,
	inline: false,
};

export default Button;

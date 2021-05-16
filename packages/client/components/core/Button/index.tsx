import styled from 'styled-components';

type Color = 'primary';

type ButtonProps = {
	variant?: Color;
	shadow?: boolean;
};

const renderShadow = (shadow?: boolean, variant?: Color) => {
	if (shadow) {
		return `0 0.5rem 1.125rem -0.5rem var(--${variant}-shadow)`;
	}

	return;
};

const Button = styled.button<ButtonProps>`
	padding: 0.625rem 1.373rem;
	width: 100%;
	background-color: var(--${(props) => props.variant});
	color: var(--white);
	font-size: 1rem;
	border: 1px solid var(--${(props) => props.variant});
	border-radius: 2px;
	box-shadow: ${(props) => renderShadow(props.shadow, props.variant)};
	cursor: pointer;

	&:hover {
		background-color: var(--${(props) => props.variant}-hover);
		border-color: var(--${(props) => props.variant}-hover);
		box-shadow: unset;
	}
`;

Button.defaultProps = {
	variant: 'primary',
	shadow: false,
};

export default Button;

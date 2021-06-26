import styled from 'styled-components';
import { Variant } from '../../../interfaces/types';

type ButtonProps = {
  variant?: Variant;
  shadow?: boolean;
  inline?: boolean;
};

const renderColor = (props: ButtonProps) => `var(--${props.variant})`;
const renderHoverColor = (props: ButtonProps) => `var(--${props.variant}-hover)`;

const renderShadow = (props: ButtonProps) => {
  if (props.shadow) {
    return `0 0.5rem 1.125rem -0.5rem var(--${props.variant}-shadow)`;
  }
};

const Button = styled.button<ButtonProps>`
  padding: 0.625rem 1.373rem;
  width: ${props => (props.inline ? '' : '100%')};
  background-color: ${renderColor};
  color: var(--white);
  font-size: 1rem;
  text-align: center;
  border: 0.0625rem solid ${renderColor};
  border-radius: 0.375rem;
  box-shadow: ${renderShadow};
  cursor: pointer;
  transition: all 0.3s linear, font-size 1ms, padding 1ms, margin 1ms,
    border 1ms;

  &:hover {
    background-color: ${renderHoverColor};
    border-color: ${renderHoverColor};
    box-shadow: unset;
  }

  &:disabled {
    background-color: var(--gray);
    border-color: var(--gray);
    box-shadow: ${renderShadow};
    cursor: not-allowed;
  }
`;

Button.defaultProps = {
  variant: 'primary',
  shadow: false,
  inline: false
};

export default Button;

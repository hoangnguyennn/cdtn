import styled from 'styled-components';

type ColProps = {
	lg?: number;
};

const Col = styled.div<ColProps>`
	flex: 1;
	min-width: 100%;

	@media (min-width: 992px) {
		min-width: calc(100% / 12 * ${(props) => props.lg || 12});
	}
`;

export default Col;

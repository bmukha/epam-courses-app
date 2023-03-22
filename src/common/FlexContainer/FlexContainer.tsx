import { FlexContainerProps } from '../../global';

import styled from 'styled-components';

const FlexContainer = styled.div<FlexContainerProps>`
	display: flex;
	flex-direction: ${({ column }) => (column ? 'column' : 'row')};
	justify-content: ${({ justify }) => justify || 'start'};
	align-items: ${({ align }) => align || 'stretch'};
	align-content: ${({ alignContent }) => alignContent || 'stretch'};
	flex-wrap: ${({ flexwrap }) => (flexwrap ? 'wrap' : 'nowrap')};
	gap: ${({ gap }) => gap || 0};
	flex-grow: ${({ grow }) => grow || 0};
	flex-shrink: ${({ shrink }) => shrink || 1};
	flex-basis: ${({ basis }) => basis || 'auto'};
`;

export default FlexContainer;

// import styled from 'styled-components';

// const FlexContainer = styled.div`
// 	display: flex;
// 	flex-direction: ${({ column }) => (column ? 'column' : 'row')};
// 	justify-content: ${({ justify }) => justify || 'start'};
// 	align-items: ${({ align }) => align || 'stretch'};
// 	align-content: ${({ alignContent }) => alignContent || 'stretch'};
// 	flex-wrap: ${({ flexwrap }) => (flexwrap ? 'wrap' : 'nowrap')};
// 	gap: ${({ gap }) => gap || 0};
// 	flex-grow: ${({ grow }) => grow || 0};
// 	flex-shrink: ${({ shrink }) => shrink || 1};
// 	flex-basis: ${({ basis }) => basis || 'auto'};
// `;

// export default FlexContainer;

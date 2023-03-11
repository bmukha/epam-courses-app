import styled from 'styled-components';

const FlexContainer = styled.div`
	display: flex;
	flex-direction: ${({ column }) => (column ? 'column' : 'row')};
	justify-content: ${({ justify }) => justify || 'start'};
	align-items: ${({ align }) => align || 'stretch'};
	flex-wrap: ${({ wrap }) => (wrap ? 'wrap' : 'nowrap')};
	gap: ${({ gap }) => gap || 0};
`;

export default FlexContainer;

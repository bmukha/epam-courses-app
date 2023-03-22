import { FlexContainer } from '..';

import { FlexContainerProps } from '../../global';

import styled from 'styled-components';

const BorderedFlexContainer = styled(FlexContainer)<FlexContainerProps>`
	padding: 1rem;
	border-radius: 1rem;
	box-shadow: 0 0 5px 3px lightgray;
`;

export default BorderedFlexContainer;

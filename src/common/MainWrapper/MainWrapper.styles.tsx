import { FlexContainer } from '..';

import styled from 'styled-components';

const StyledMainWrapper = styled(FlexContainer)<FlexContainerProps>`
	border-bottom-left-radius: 0;
	border-bottom-right-radius: 0;

	& > * {
		width: 100%;
	}
`;

export default StyledMainWrapper;

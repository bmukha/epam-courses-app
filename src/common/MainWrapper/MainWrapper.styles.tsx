import { FlexContainer } from '..';

import styled from 'styled-components';
import StyledNotFound from '../../components/NotFound/NotFound.styles';

const StyledMainWrapper = styled(FlexContainer)<FlexContainerProps>`
	border-bottom-left-radius: 0;
	border-bottom-right-radius: 0;

	& > * {
		width: 100%;
	}

	&:has(${StyledNotFound}) {
		justify-content: center;
	}
`;

export default StyledMainWrapper;

import { FlexContainer } from '../../../../common';

import styled from 'styled-components';

const StyledSearchBar = styled(FlexContainer)<FlexContainerProps>`
	margin: 0 auto;

	& > * {
		margin: 0 auto;
	}
`;

export default StyledSearchBar;

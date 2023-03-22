import { FlexContainer } from '../../../../common';

import { FlexContainerProps } from '../../../../common/FlexContainer/FlexContainer';

import styled from 'styled-components';

const StyledSearchBar = styled(FlexContainer)<FlexContainerProps>`
	margin: 0 auto;

	& > * {
		margin: 0 auto;
	}
`;

export default StyledSearchBar;

import { FlexContainer } from '../../../../common';

import styled from 'styled-components';

const StyledSearchBar = styled(FlexContainer).attrs({ as: 'form' })`
	margin: 0 auto;

	& > * {
		margin: 0 auto;
	}
`;

export default StyledSearchBar;

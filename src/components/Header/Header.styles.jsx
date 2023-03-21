import { BorderedFlexContainer } from '../../common/';

import styled from 'styled-components';

const StyledHeader = styled(BorderedFlexContainer).attrs({ as: 'header' })`
	border-top-left-radius: 0;
	border-top-right-radius: 0;
`;

export default StyledHeader;

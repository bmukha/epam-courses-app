import { BorderedFlexContainer } from '../../common';

import styled from 'styled-components';

const StyledCourses = styled(BorderedFlexContainer).attrs({ as: 'main' })`
	border-bottom-left-radius: 0;
	border-bottom-right-radius: 0;
	flex-grow: 1;

	.automargin button {
		margin: 0 auto;
	}
`;

export default StyledCourses;

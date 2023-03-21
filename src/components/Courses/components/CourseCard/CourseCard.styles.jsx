import { BorderedFlexContainer } from '../../../../common';

import styled from 'styled-components';

const StyledCourseCard = styled(BorderedFlexContainer).attrs({ as: 'li' })`
	p.nowrap {
		max-width: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.authors {
		min-width: 300px;
	}

	& span {
		font-weight: bold;
	}

	& button {
		align-self: center;
	}
`;

export default StyledCourseCard;

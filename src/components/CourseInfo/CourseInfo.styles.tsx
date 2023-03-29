import { FlexContainer } from '../../common';

import styled from 'styled-components';

const StyledCourseInfo = styled(FlexContainer)<FlexContainerProps>`
	p.nowrap {
		max-width: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	& span {
		font-weight: bold;
	}

	& button {
		align-self: start;
	}

	& h2 {
		align-self: center;
	}

	& > div {
		& > * {
			width: 50%;
			flex-grow: 1;
		}
	}
`;

export default StyledCourseInfo;

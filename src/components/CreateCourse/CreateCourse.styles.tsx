import { FormHTMLAttributes } from 'react';

import { FlexContainer } from '../../common';

import styled from 'styled-components';
interface StyledCreateCourseProps
	extends Omit<FlexContainerProps, 'children'>,
		FormHTMLAttributes<HTMLFormElement> {}

const StyledCreateCourse = styled(FlexContainer)<StyledCreateCourseProps>`
	border-bottom-left-radius: 0;
	border-bottom-right-radius: 0;
	flex-grow: 1;

	& h3 {
		align-self: center;
	}

	span {
		font-size: 2rem;
		font-weight: 700;
	}

	ul {
		width: 100%;
	}
`;

export default StyledCreateCourse;

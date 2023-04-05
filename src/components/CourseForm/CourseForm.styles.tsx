import { FormHTMLAttributes } from 'react';

import { FlexContainer } from '../../common';

import styled from 'styled-components';
interface StyledCourseFormProps
	extends Omit<FlexContainerProps, 'children'>,
		FormHTMLAttributes<HTMLFormElement> {}

const StyledCourseForm = styled(FlexContainer)<StyledCourseFormProps>`
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

export default StyledCourseForm;

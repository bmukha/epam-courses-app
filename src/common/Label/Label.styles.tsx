import { LabelHTMLAttributes } from 'react';

import { FlexContainer } from '..';

import styled from 'styled-components';

export interface StyledLabelProps
	extends LabelHTMLAttributes<HTMLLabelElement>,
		Omit<FlexContainerProps, 'children'> {}

const StyledLabel = styled(FlexContainer)<StyledLabelProps>`
	&:has(textarea) {
		width: 100%;
	}
`;

export default StyledLabel;

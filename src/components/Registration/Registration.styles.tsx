import { FormHTMLAttributes } from 'react';

import { FlexContainer } from '../../common';

import styled from 'styled-components';

interface StyledRegistrationProps
	extends Omit<FlexContainerProps, 'children'>,
		FormHTMLAttributes<HTMLFormElement> {}

const StyledRegistration = styled(FlexContainer)<StyledRegistrationProps>`
	width: fit-content;
`;

export default StyledRegistration;

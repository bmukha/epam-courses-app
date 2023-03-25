import { FormHTMLAttributes } from 'react';

import { FlexContainer } from '../../common';

import styled from 'styled-components';

interface StyledLoginProps
	extends Omit<FlexContainerProps, 'children'>,
		FormHTMLAttributes<HTMLFormElement> {}

const StyledLogin = styled(FlexContainer)<StyledLoginProps>`
	width: fit-content;
`;

export default StyledLogin;

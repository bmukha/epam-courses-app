import { ReactNode } from 'react';

import { BorderedFlexContainer } from '../../common';

import { FlexContainerProps } from '../../global';

import styled from 'styled-components';

interface StyledHeaderProps extends FlexContainerProps {
	children: ReactNode;
}

const StyledHeader = styled(BorderedFlexContainer)<StyledHeaderProps>`
	border-top-left-radius: 0;
	border-top-right-radius: 0;
`;

export default StyledHeader;

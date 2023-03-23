import { HTMLAttributes } from 'react';

import styled from 'styled-components';

export interface StyledLogoProps extends HTMLAttributes<HTMLImageElement> {}

const StyledLogo = styled.img<StyledLogoProps>`
	width: 75px;
	margin-right: auto;
`;

export default StyledLogo;

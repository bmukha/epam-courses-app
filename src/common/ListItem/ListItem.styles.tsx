import { LiHTMLAttributes } from 'react';

import { FlexContainer } from '../../common';

import styled from 'styled-components';

export interface StyledListItemProps
	extends LiHTMLAttributes<HTMLUListElement>,
		Omit<FlexContainerProps, 'children'> {}

const StyledListItem = styled(FlexContainer)<StyledListItemProps>``;

export default StyledListItem;

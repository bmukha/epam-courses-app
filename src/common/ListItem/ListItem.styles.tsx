import { ReactNode } from 'react';

import { FlexContainer } from '../../common';

import styled from 'styled-components';

interface StyledListItemProps extends FlexContainerProps {
	children?: ReactNode;
}

const StyledListItem = styled(FlexContainer)<StyledListItemProps>``;

export default StyledListItem;

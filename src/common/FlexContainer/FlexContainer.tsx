import { ReactNode } from 'react';

import StyledFlexContainer, {
	StyledFlexContainerProps,
} from './StyledFlexContainer';

export interface FlexContainerProps extends StyledFlexContainerProps {
	children?: ReactNode | ReactNode[];
}

const FlexContainer = (props: FlexContainerProps) => (
	<StyledFlexContainer {...props}></StyledFlexContainer>
);

export default FlexContainer;

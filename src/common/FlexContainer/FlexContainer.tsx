import { ReactNode } from 'react';

import StyledFlexContainer, {
	StyledFlexContainerProps,
} from './StyledFlexContainer';

export interface FlexContainerProps extends StyledFlexContainerProps {
	children?: ReactNode | ReactNode[];
}

const FlexContainer = ({ as, children, ...props }: FlexContainerProps) => (
	<StyledFlexContainer as={as} {...props}>
		{children}
	</StyledFlexContainer>
);

export default FlexContainer;

import { FC } from 'react';

import StyledFlexContainer from './StyledFlexContainer';

const FlexContainer: FC<FlexContainerProps> = ({
	forwardedAs,
	children,
	...props
}) => (
	<StyledFlexContainer as={forwardedAs} {...props}>
		{children}
	</StyledFlexContainer>
);

export default FlexContainer;

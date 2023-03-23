import StyledFlexContainer from './StyledFlexContainer';

const FlexContainer = ({
	forwardedAs,
	children,
	...props
}: FlexContainerProps) => (
	<StyledFlexContainer as={forwardedAs} {...props}>
		{children}
	</StyledFlexContainer>
);

export default FlexContainer;

import StyledFlexContainer from './StyledFlexContainer';

const FlexContainer = ({ children, ...props }: FlexContainerProps) => (
	<StyledFlexContainer {...props}>{children}</StyledFlexContainer>
);

export default FlexContainer;

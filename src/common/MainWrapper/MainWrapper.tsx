import StyledMainWrapper from './MainWrapper.styles';

interface MainWrapperProps extends FlexContainerProps {}

const MainWrapper = ({ children }: MainWrapperProps) => (
	<StyledMainWrapper
		forwardedAs='main'
		column
		justify='start'
		align='center'
		grow={1}
		gap='1rem'
		addBorder
	>
		{children}
	</StyledMainWrapper>
);

export default MainWrapper;

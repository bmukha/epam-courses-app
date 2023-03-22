import StyledMainWrapper from './MainWrapper.styles';

interface MainWrapperProps extends FlexContainerProps {}

const MainWrapper = ({ children }: MainWrapperProps) => (
	<StyledMainWrapper column justify='start' align='center' grow={1} addBorder>
		{children}
	</StyledMainWrapper>
);

export default MainWrapper;

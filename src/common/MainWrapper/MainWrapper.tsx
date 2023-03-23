import { FC, ReactNode } from 'react';

import StyledMainWrapper from './MainWrapper.styles';
interface MainWrapperProps extends FlexContainerProps {
	children: ReactNode;
}

const MainWrapper: FC<MainWrapperProps> = ({ children }) => (
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

import styled from 'styled-components';
import { FlexContainer } from '../../common';
import { FlexContainerProps } from '../../common/FlexContainer/FlexContainer';

interface StyledHeaderProps extends FlexContainerProps {}

const StyledHeader = styled(FlexContainer).attrs({
	forwardedAs: 'header',
})<StyledHeaderProps>`
	border-top-left-radius: 0;
	border-top-right-radius: 0;
`;

export default StyledHeader;

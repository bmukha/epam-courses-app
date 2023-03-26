import { FlexContainer } from '../../common';

import styled from 'styled-components';

interface NotFoundProps extends FlexContainerProps {}

const StyledNotFound = styled(FlexContainer)<NotFoundProps>`
	width: fit-content;
	& p {
		font-size: 3rem;
	}
`;

export default StyledNotFound;

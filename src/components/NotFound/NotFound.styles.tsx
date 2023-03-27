import { FlexContainer } from '../../common';

import styled from 'styled-components';

interface NotFoundProps extends FlexContainerProps {}

const StyledNotFound = styled(FlexContainer)<NotFoundProps>`
	max-width: max(50%, 400px);

	& p {
		font-size: 3rem;
		text-align: center;
	}
`;

export default StyledNotFound;

import { FlexContainer } from '../';

import styled from 'styled-components';

const StyledInput = styled(FlexContainer).attrs({ as: 'label' })`
	& > input,
	& > textarea {
		padding: 0.5rem;
		border: 3px solid lightgray;
		border-radius: 10px;
	}

	&:has(textarea) {
		width: 100%;
	}

	& input {
		height: 35px;
	}

	& textarea {
		width: 100%;
		flex-grow: 1;
	}
`;

export default StyledInput;

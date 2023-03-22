import { flexMixin, borderMixin } from '../../mixins';

import styled from 'styled-components';

const StyledFlexContainer = styled.div<StyledFlexContainerProps>`
	${flexMixin}
	${({ addBorder }) => addBorder && borderMixin}
`;

export default StyledFlexContainer;

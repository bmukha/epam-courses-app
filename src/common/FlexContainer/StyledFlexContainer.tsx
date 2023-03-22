import borderMixin from '../../mixins/borderMixin';
import flexMixin, { FlexMixinProps } from '../../mixins/flexMixin';

import styled from 'styled-components';

export interface StyledFlexContainerProps extends FlexMixinProps {
	as?: keyof HTMLElementTagNameMap;
	addBorder?: boolean;
	className?: string;
}

const StyledFlexContainer = styled.div<StyledFlexContainerProps>`
	${flexMixin}
	${({ addBorder }) => addBorder && borderMixin}
`;

export default StyledFlexContainer;

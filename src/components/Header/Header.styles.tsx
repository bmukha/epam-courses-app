import styled from 'styled-components';
import borderMixin from '../../mixins/borderMixin';
import flexMixin from '../../mixins/flexMixin';

const StyledHeader = styled.header`
	${borderMixin}
	${flexMixin}
	border-top-left-radius: 0;
	border-top-right-radius: 0;
`;

export default StyledHeader;

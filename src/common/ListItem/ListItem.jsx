import { FlexContainer } from '../../common';

import styled from 'styled-components';

const StyledListItem = styled(FlexContainer).attrs({ as: 'li' })``;

const ListItem = ({
	children,
	justify,
	align,
	gap,
	grow,
	shrink,
	basis,
	flexwrap,
}) => (
	<StyledListItem
		justify={justify}
		align={align}
		gap={gap}
		grow={grow}
		shrink={shrink}
		basis={basis}
		flexwrap={flexwrap}
	>
		{children}
	</StyledListItem>
);

export default ListItem;

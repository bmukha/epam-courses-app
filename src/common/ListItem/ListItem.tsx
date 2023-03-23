import { ReactNode } from 'react';

import StyledListItem from './ListItem.styles';

interface ListItemProps extends FlexContainerProps {
	children?: ReactNode;
}

const ListItem = ({ children }: ListItemProps) => (
	<StyledListItem>{children}</StyledListItem>
);

export default ListItem;

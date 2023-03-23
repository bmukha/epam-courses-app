import { ReactNode } from 'react';

import StyledListItem, { StyledListItemProps } from './ListItem.styles';

interface ListItemProps extends StyledListItemProps {
	children?: ReactNode;
}

const ListItem = ({ children, ...props }: ListItemProps) => (
	<StyledListItem forwardedAs='li' {...props}>
		{children}
	</StyledListItem>
);

export default ListItem;

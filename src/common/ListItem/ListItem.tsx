import { FC, ReactNode } from 'react';

import StyledListItem, { StyledListItemProps } from './ListItem.styles';
interface ListItemProps extends StyledListItemProps {
	children?: ReactNode;
}

const ListItem: FC<ListItemProps> = ({ children, ...props }) => (
	<StyledListItem forwardedAs='li' {...props}>
		{children}
	</StyledListItem>
);

export default ListItem;

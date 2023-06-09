import { FC, ReactNode } from 'react';

import { ListItem } from '../../../common';
interface AuthorsListItemProps extends FlexContainerProps {
	children?: ReactNode;
}

const AuthorsListItem: FC<AuthorsListItemProps> = ({ children }) => (
	<ListItem
		justify='space-between'
		align='center'
		gap='1rem'
		grow={1}
		shrink={1}
		flexwrap
	>
		{children}
	</ListItem>
);

export default AuthorsListItem;

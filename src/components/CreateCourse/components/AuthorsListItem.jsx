import { ListItem } from '../../../common';

const AuthorsListItem = ({ children }) => (
	<ListItem
		justify='space-between'
		align='center'
		gap='1rem'
		grow='1'
		shrink='1'
		flexwrap
	>
		{children}
	</ListItem>
);

export default AuthorsListItem;

import StyledListItem from './ListItem.styles';

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

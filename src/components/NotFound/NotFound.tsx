import { FC } from 'react';
import { Link } from 'react-router-dom';

import StyledNotFound from './NotFound.styles';

const NotFound: FC = () => (
	<StyledNotFound
		column
		justify='center'
		align='center'
		alignContent='center'
		gap='1rem'
		addBorder
	>
		<p>
			There is nothing here, please go to the <Link to='/'>Homepage</Link>
		</p>
	</StyledNotFound>
);
export default NotFound;

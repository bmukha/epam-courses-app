import { Button, BorderedFlexContainer } from '../../common/';
import { Logo } from '../../components';

import styled from 'styled-components';

const StyledHeader = styled(BorderedFlexContainer).attrs({ as: 'header' })`
	border-top-left-radius: 0;
	border-top-right-radius: 0;
`;

const Header = () => {
	const handleLogoutButtonClick = () => console.log('Logout button clicked');

	return (
		<StyledHeader align='center' gap='1rem'>
			<Logo />
			<p>Bohdan</p>
			<Button text='Logout' onClick={handleLogoutButtonClick} />
		</StyledHeader>
	);
};
export default Header;

import { MouseEventHandler } from 'react';

import { Button } from '../../common';
import { Logo } from '..';

import { LOGOUT_BUTTON_TEXT } from '../../constants';

import StyledHeader from './Header.styles';

const Header = () => {
	const handleLogoutButtonClick: MouseEventHandler = () =>
		console.log('Logout button clicked');

	return (
		<StyledHeader gap='1rem' align='center' addBorder>
			<Logo />
			<p>Bohdan</p>
			<Button onClick={handleLogoutButtonClick}>{LOGOUT_BUTTON_TEXT}</Button>
		</StyledHeader>
	);
};
export default Header;
// as='header' align='center' gap='1rem' addBorder

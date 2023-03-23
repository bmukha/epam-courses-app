import { FC, MouseEventHandler } from 'react';

import { Button } from '../../common';
import { Logo } from '..';

import { LOGOUT_BUTTON_TEXT } from '../../constants';

import StyledHeader from './Header.styles';

const Header: FC = () => {
	const handleLogoutButtonClick: MouseEventHandler = (): void =>
		console.log('Logout button clicked');

	return (
		<StyledHeader forwardedAs='header' align='center' gap='1rem' addBorder>
			<Logo />
			<p>Bohdan</p>
			<Button onClick={handleLogoutButtonClick}>{LOGOUT_BUTTON_TEXT}</Button>
		</StyledHeader>
	);
};
export default Header;

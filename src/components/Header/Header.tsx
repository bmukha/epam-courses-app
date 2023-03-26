import { FC, MouseEventHandler } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Button } from '../../common';
import { Logo } from '..';

import { LOGOUT_BUTTON_TEXT } from '../../constants';

import StyledHeader from './Header.styles';

const Header: FC = () => {
	const location = useLocation();
	const navigate = useNavigate();

	const token: string | null = localStorage.getItem('coursesAppUserToken');
	// console.log(token);

	if (token) {
	}

	const handleLogoutButtonClick: MouseEventHandler<HTMLButtonElement> = () => {
		localStorage.removeItem('coursesAppUserToken');
		navigate('/login');
	};

	return (
		<StyledHeader forwardedAs='header' align='center' gap='1rem' addBorder>
			<Logo />
			{location.pathname === '/login' ||
			location.pathname === '/registration' ? null : (
				<>
					<p>{'temp'}</p>
					<Button onClick={handleLogoutButtonClick}>
						{LOGOUT_BUTTON_TEXT}
					</Button>
				</>
			)}
		</StyledHeader>
	);
};
export default Header;

import { FC, MouseEventHandler, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Button } from '../../common';
import { Logo } from '..';

import { LOGOUT_BUTTON_TEXT } from '../../constants';

import StyledHeader from './Header.styles';

const Header: FC = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const loggedUser = useRef<LoggedUser | null>(null);

	useEffect(() => {
		const dataFromLocalStorage = localStorage.getItem('coursesAppUser');
		if (dataFromLocalStorage) {
			loggedUser.current = JSON.parse(dataFromLocalStorage);
		}
	}, []);

	const handleLogoutButtonClick: MouseEventHandler<HTMLButtonElement> = () => {
		localStorage.removeItem('coursesAppUser');
		navigate('/login');
	};

	return (
		<StyledHeader forwardedAs='header' align='center' gap='1rem' addBorder>
			<Logo />
			{location.pathname === '/login' ||
			location.pathname === '/registration' ? null : (
				<>
					<p>{loggedUser.current ? loggedUser.current.name : ''}</p>
					<Button onClick={handleLogoutButtonClick}>
						{LOGOUT_BUTTON_TEXT}
					</Button>
				</>
			)}
		</StyledHeader>
	);
};
export default Header;

import { FC, MouseEventHandler, useEffect, useRef } from 'react';
import { NavigateFunction, useLocation, useNavigate } from 'react-router-dom';

import { Button } from '../../common';
import { Logo } from '..';

import { LOGOUT_BUTTON_TEXT } from '../../constants';

import StyledHeader from './Header.styles';

const Header: FC = () => {
	const { pathname } = useLocation();
	const navigate: NavigateFunction = useNavigate();
	const loggedUser = useRef<LoggedUser | null>(null);

	useEffect(() => {
		const dataFromLocalStorage: string | null =
			localStorage.getItem('coursesAppUser');
		if (dataFromLocalStorage) {
			loggedUser.current = JSON.parse(dataFromLocalStorage);
		}
	}, []);

	const handleLogoutButtonClick: MouseEventHandler<
		HTMLButtonElement
	> = (): void => {
		localStorage.removeItem('coursesAppUser');
		navigate('/login');
	};

	return (
		<StyledHeader forwardedAs='header' align='center' gap='1rem' addBorder>
			<Logo />
			{pathname === '/login' || pathname === '/registration' ? null : (
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

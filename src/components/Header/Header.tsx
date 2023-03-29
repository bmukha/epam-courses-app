import { Dispatch, FC, MouseEventHandler, SetStateAction } from 'react';
import { NavigateFunction, useLocation, useNavigate } from 'react-router-dom';

import { Button } from '../../common';
import { Logo } from '..';

import { LOGOUT_BUTTON_TEXT } from '../../constants';

import StyledHeader from './Header.styles';
interface HeaderProps {
	name: string | null;
	setToken: Dispatch<SetStateAction<string | null>>;
	setName: Dispatch<SetStateAction<string | null>>;
}

const Header: FC<HeaderProps> = ({ name, setToken, setName }) => {
	const { pathname } = useLocation();
	const navigate: NavigateFunction = useNavigate();

	const handleLogoutButtonClick: MouseEventHandler<
		HTMLButtonElement
	> = (): void => {
		localStorage.removeItem('coursesAppUserToken');
		localStorage.removeItem('coursesAppUserName');
		setName(null);
		setToken(null);
		navigate('/login');
	};

	return (
		<StyledHeader forwardedAs='header' align='center' gap='1rem' addBorder>
			<Logo />
			{pathname === '/login' || pathname === '/registration' ? null : (
				<>
					<p>{name ? name : ''}</p>
					{name ? (
						<Button onClick={handleLogoutButtonClick}>
							{LOGOUT_BUTTON_TEXT}
						</Button>
					) : null}
				</>
			)}
		</StyledHeader>
	);
};
export default Header;

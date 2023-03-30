import { FC, MouseEventHandler } from 'react';
import { NavigateFunction, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '../../common';
import { Logo } from '..';

import { LOGOUT_BUTTON_TEXT } from '../../constants';

import { userLoggedOut } from '../../store/user/actionCreators';
import { getUserAuthStatus, getUserName } from '../../selectors';
import { setCourses } from '../../store/courses/actionCreators';
import { setAuthors } from '../../store/authors/actionCreators';

import StyledHeader from './Header.styles';

const Header: FC = () => {
	const { pathname } = useLocation();
	const navigate: NavigateFunction = useNavigate();
	const dispatch = useDispatch();
	const name = useSelector(getUserName);
	const isUserLoggedIn = useSelector(getUserAuthStatus);

	const handleLogoutButtonClick: MouseEventHandler<
		HTMLButtonElement
	> = (): void => {
		localStorage.removeItem('coursesAppUser');
		dispatch(userLoggedOut());
		dispatch(setCourses([]));
		dispatch(setAuthors([]));
		navigate('/login');
	};

	return (
		<StyledHeader forwardedAs='header' align='center' gap='1rem' addBorder>
			<Logo />
			{!(pathname === '/login' || pathname === '/registration') && (
				<>
					<p>{name}</p>
					{isUserLoggedIn && (
						<Button onClick={handleLogoutButtonClick}>
							{LOGOUT_BUTTON_TEXT}
						</Button>
					)}
				</>
			)}
		</StyledHeader>
	);
};
export default Header;

import { FC, MouseEventHandler } from 'react';
import { NavigateFunction, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '../../common';
import { Logo } from '..';

import { LOGOUT_BUTTON_TEXT } from '../../constants';

import {
	userAuthStatusSelector,
	userNameSelector,
	userTokenSelector,
} from '../../selectors';

import StyledHeader from './Header.styles';
import { asyncLogoutUser } from '../../store/user/thunk';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';

const Header: FC = () => {
	const { pathname } = useLocation();
	const navigate: NavigateFunction = useNavigate();
	const dispatch: ThunkDispatch<StoreState, void, Action> = useDispatch();
	const name = useSelector(userNameSelector);
	const isUserLoggedIn = useSelector(userAuthStatusSelector);
	const token = useSelector(userTokenSelector);

	const handleLogoutButtonClick: MouseEventHandler<
		HTMLButtonElement
	> = async (): Promise<void> => {
		dispatch(asyncLogoutUser(token));
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

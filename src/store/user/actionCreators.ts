import { ActionCreator, Action } from 'redux';

import * as actionTypes from './actionTypes';
interface LoginUserAction extends Action<typeof actionTypes.USER_LOGGED_IN> {
	payload: User;
}
interface LogoutUserAction extends Action<typeof actionTypes.USER_LOGGED_OUT> {
	payload: User;
}

export type UserActions = LoginUserAction | LogoutUserAction;

export const userLoggedIn: ActionCreator<LoginUserAction> = (user: User) => {
	localStorage.setItem('coursesAppUser', JSON.stringify(user));
	return {
		type: actionTypes.USER_LOGGED_IN,
		payload: user,
	};
};

export const userLoggedOut: ActionCreator<LogoutUserAction> = () => ({
	type: actionTypes.USER_LOGGED_OUT,
	payload: {
		isAuth: false,
		name: '',
		email: '',
		token: '',
	},
});

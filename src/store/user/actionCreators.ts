import { ActionCreator, Action } from 'redux';

import * as actionTypes from './actionTypes';
interface LoginUserAction extends Action<typeof actionTypes.USER_LOGGED_IN> {
	payload: User;
}
interface LogoutUserAction extends Action<typeof actionTypes.USER_LOGGED_OUT> {
	payload: User;
}

export type UserActions = LoginUserAction | LogoutUserAction;

export const userLoggedIn: ActionCreator<LoginUserAction> = ({
	name,
	email,
	token,
}: User) => ({
	type: actionTypes.USER_LOGGED_IN,
	payload: {
		isAuth: true,
		name,
		email,
		token,
	},
});

export const userLoggedOut: ActionCreator<LogoutUserAction> = () => ({
	type: actionTypes.USER_LOGGED_OUT,
	payload: {
		isAuth: false,
		name: '',
		email: '',
		token: '',
	},
});

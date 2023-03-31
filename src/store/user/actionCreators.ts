import { ActionCreator, Action } from 'redux';

import * as actionTypes from './actionTypes';
interface LoginUserAction extends Action<typeof actionTypes.LOGIN_USER> {
	payload: User;
}
interface LogoutUserAction extends Action<typeof actionTypes.LOGOUT_USER> {
	payload: User;
}

export type UserActions = LoginUserAction | LogoutUserAction;

export const loginUser: ActionCreator<LoginUserAction> = (user: User) => {
	localStorage.setItem('coursesAppUser', JSON.stringify(user));
	return {
		type: actionTypes.LOGIN_USER,
		payload: user,
	};
};

export const logoutUser: ActionCreator<LogoutUserAction> = () => ({
	type: actionTypes.LOGOUT_USER,
	payload: {
		isAuth: false,
		name: '',
		email: '',
		token: '',
	},
});

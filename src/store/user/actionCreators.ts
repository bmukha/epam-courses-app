import { createAction } from '@reduxjs/toolkit';

import { LOGIN_USER, LOGOUT_USER } from './actionTypes';

export const loginUser = createAction(LOGIN_USER, (user: User) => {
	localStorage.setItem('coursesAppUser', JSON.stringify(user));
	return { payload: user };
});

export const logoutUser = createAction(LOGOUT_USER, () => ({
	payload: {
		isAuth: false,
		name: '',
		email: '',
		token: '',
	},
}));

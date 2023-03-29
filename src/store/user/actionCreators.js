import * as actions from './actionTypes';

export const userLoggedIn = ({ name, email, token }) => ({
	type: actions.USER_LOGGED_IN,
	payload: {
		isAuth: true,
		name,
		email,
		token,
	},
});

export const userLoggedOut = () => ({
	type: actions.USER_LOGGED_OUT,
	payload: {
		isAuth: false,
		name: '',
		email: '',
		token: '',
	},
});

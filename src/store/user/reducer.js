import { USER_LOGGED_IN, USER_LOGGED_OUT } from './actionTypes';

const userInitialState = {
	isAuth: false,
	name: '',
	email: '',
	token: '',
};

export default function user(state = userInitialState, action) {
	const { type, payload } = action;
	switch (type) {
		case USER_LOGGED_IN:
			return { ...payload };
		case USER_LOGGED_OUT:
			return { ...userInitialState };
		default:
			return state;
	}
}

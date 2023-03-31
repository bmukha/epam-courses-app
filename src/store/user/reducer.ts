import { Reducer } from 'redux';

import * as actionTypes from './actionTypes';

const userInitialState: User = {
	isAuth: false,
	name: '',
	email: '',
	token: '',
	role: '',
};

const userReducer: Reducer<User> = (state: User = userInitialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case actionTypes.LOGIN_USER:
			return { ...payload };
		case actionTypes.LOGOUT_USER:
			return { ...userInitialState };
		default:
			return state;
	}
};

export default userReducer;

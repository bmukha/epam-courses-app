import { Reducer } from 'redux';

import * as actionTypes from './actionTypes';
import { UserActions } from './actionCreators';

const userInitialState: User = {
	isAuth: false,
	name: '',
	email: '',
	token: '',
};

const userReducer: Reducer<User, UserActions> = (
	state: User = userInitialState,
	action: UserActions
) => {
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

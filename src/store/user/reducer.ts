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
		case actionTypes.USER_LOGGED_IN:
			return { ...payload };
		case actionTypes.USER_LOGGED_OUT:
			return { ...userInitialState };
		default:
			return state;
	}
};

export default userReducer;

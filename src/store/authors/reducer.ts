import { Reducer } from 'redux';

import * as actionTypes from './actionTypes';
import { AuthorActions } from './actionCreators';

const initialState: Author[] = [];

const authorsReducer: Reducer<Author[], AuthorActions> = (
	state: Author[] = initialState,
	action: AuthorActions
): Author[] => {
	const { type, payload } = action;
	switch (type) {
		case actionTypes.SET_AUTHORS:
			return [...payload];
		case actionTypes.NEW_AUTHOR_ADDED:
			return [...state, payload];
		default:
			return state;
	}
};

export default authorsReducer;

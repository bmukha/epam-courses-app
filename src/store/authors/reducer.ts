import { Reducer } from 'redux';

import * as actionTypes from './actionTypes';

const initialState: Author[] = [];

const authorsReducer: Reducer<Author[]> = (
	state: Author[] = initialState,
	action
): Author[] => {
	const { type, payload } = action;
	switch (type) {
		case actionTypes.SET_AUTHORS:
			return [...payload];
		case actionTypes.ADD_NEW_AUTHOR:
			return [...state, payload];
		default:
			return state;
	}
};

export default authorsReducer;

import * as actions from './actionTypes';

export const queryChanged = (value) => ({
	type: actions.QUERY_CHANGED,
	payload: value,
});

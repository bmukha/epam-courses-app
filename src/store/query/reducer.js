import { QUERY_CHANGED } from './actionTypes';

export default function query(state = '', action) {
	const { type, payload } = action;
	switch (type) {
		case QUERY_CHANGED:
			return payload;
		default:
			return state;
	}
}

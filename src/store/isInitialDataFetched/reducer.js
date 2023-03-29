import { INITIAL_DATA_FETCHED } from './actionTypes';

export default function isInitialDataFetched(state = false, action) {
	const { type } = action;
	switch (type) {
		case INITIAL_DATA_FETCHED:
			return true;
		default:
			return state;
	}
}

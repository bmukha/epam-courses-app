import * as actions from './actionTypes';

export default function courses(state = [], action) {
	const { type, payload } = action;
	switch (type) {
		case actions.SET_COURSES:
			return [...payload];
		case actions.NEW_COURSE_ADDED:
			return [...state, payload];
		case actions.COURSE_DELETED:
			return state.filter((course) => course.id !== payload);
		case actions.COURSE_UPDATED:
			return state.map((course) =>
				course.id !== payload.id ? course : { ...payload }
			);
		default:
			return state;
	}
}

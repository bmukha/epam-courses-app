import { Reducer } from 'redux';

import * as actionTypes from './actionTypes';
import { CourseActions } from './actionCreators';

const initialState: Course[] = [];

const coursesReducer: Reducer<Course[], CourseActions> = (
	state: Course[] = initialState,
	action: CourseActions
): Course[] => {
	const { type, payload } = action;
	switch (type) {
		case actionTypes.SET_COURSES:
			return [...payload];
		case actionTypes.NEW_COURSE_ADDED:
			return [...state, payload];
		case actionTypes.COURSE_DELETED:
			return state.filter((course) => course.id !== payload);
		case actionTypes.COURSE_UPDATED:
			return state.map((course) =>
				course.id !== payload.id ? course : { ...payload }
			);
		default:
			return state;
	}
};

export default coursesReducer;

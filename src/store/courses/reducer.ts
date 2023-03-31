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
		case actionTypes.ADD_NEW_COURSE:
			return [...state, payload];
		case actionTypes.DELETE_COURSE:
			return state.filter((course) => course.id !== payload);
		case actionTypes.UPDATE_COURSE:
			return state.map((course) =>
				course.id !== payload.id ? course : { ...payload }
			);
		default:
			return state;
	}
};

export default coursesReducer;

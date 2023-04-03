import { createAction } from '@reduxjs/toolkit';

import {
	SET_COURSES,
	ADD_NEW_COURSE,
	DELETE_COURSE,
	UPDATE_COURSE,
} from './actionTypes';

export const setCourses = createAction(SET_COURSES, (courses: Course[]) => ({
	payload: courses,
}));

export const addNewCourse = createAction(ADD_NEW_COURSE, (course: Course) => ({
	payload: course,
}));

export const deleteCourse = createAction(DELETE_COURSE, (id: string) => ({
	payload: id,
}));

export const updateCourse = createAction(UPDATE_COURSE, (course: Course) => ({
	payload: course,
}));

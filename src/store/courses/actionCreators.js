import * as actions from './actionTypes';

export const setCourses = (courses) => ({
	type: actions.SET_COURSES,
	payload: courses,
});

export const addCourse = (course) => ({
	type: actions.NEW_COURSE_ADDED,
	payload: course,
});

export const deleteCourse = (id) => ({
	type: actions.COURSE_DELETED,
	payload: id,
});

export const updateCourse = (course) => ({
	type: actions.COURSE_UPDATED,
	payload: course,
});

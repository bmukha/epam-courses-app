import { ActionCreator, Action } from 'redux';

import * as actionTypes from './actionTypes';
interface SetCoursesAction extends Action<typeof actionTypes.SET_COURSES> {
	payload: Course[];
}
interface AddNewCourseAction extends Action<typeof actionTypes.ADD_NEW_COURSE> {
	payload: Course;
}
interface UpdateCourseAction extends Action<typeof actionTypes.UPDATE_COURSE> {
	payload: Course;
}
interface DeleteCourseAction extends Action<typeof actionTypes.DELETE_COURSE> {
	payload: string;
}

export type CourseActions =
	| SetCoursesAction
	| AddNewCourseAction
	| UpdateCourseAction
	| DeleteCourseAction;

export const setCourses: ActionCreator<SetCoursesAction> = (
	courses: Course[]
) => ({
	type: actionTypes.SET_COURSES,
	payload: courses,
});

export const addNewCourse: ActionCreator<AddNewCourseAction> = (
	course: Course
) => ({
	type: actionTypes.ADD_NEW_COURSE,
	payload: course,
});

export const deleteCourse: ActionCreator<DeleteCourseAction> = (
	id: string
) => ({
	type: actionTypes.DELETE_COURSE,
	payload: id,
});

export const updateCourse: ActionCreator<UpdateCourseAction> = (
	course: Course
) => ({
	type: actionTypes.UPDATE_COURSE,
	payload: course,
});

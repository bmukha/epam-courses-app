import { ActionCreator, Action } from 'redux';

import * as actionTypes from './actionTypes';
interface SetCoursesAction extends Action<typeof actionTypes.SET_COURSES> {
	payload: Course[];
}
interface AddCourseAction extends Action<typeof actionTypes.NEW_COURSE_ADDED> {
	payload: Course;
}
interface UpdateCourseAction extends Action<typeof actionTypes.COURSE_UPDATED> {
	payload: Course;
}
interface DeleteCourseAction extends Action<typeof actionTypes.COURSE_DELETED> {
	payload: string;
}

export type CourseActions =
	| SetCoursesAction
	| AddCourseAction
	| UpdateCourseAction
	| DeleteCourseAction;

export const setCourses: ActionCreator<SetCoursesAction> = (
	courses: Course[]
) => ({
	type: actionTypes.SET_COURSES,
	payload: courses,
});

export const addCourse: ActionCreator<AddCourseAction> = (course: Course) => ({
	type: actionTypes.NEW_COURSE_ADDED,
	payload: course,
});

export const deleteCourse: ActionCreator<DeleteCourseAction> = (
	id: string
) => ({
	type: actionTypes.COURSE_DELETED,
	payload: id,
});

export const updateCourse: ActionCreator<UpdateCourseAction> = (
	course: Course
) => ({
	type: actionTypes.COURSE_UPDATED,
	payload: course,
});

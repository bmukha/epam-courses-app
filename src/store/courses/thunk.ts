import { ThunkAction } from 'redux-thunk';

import {
	deleteCourse,
	addNewCourse,
	updateCourse,
	setCourses,
} from './actionCreators';

import {
	addCourseOnServer,
	deleteCourseFromServer,
	fetchAllCourses,
	updateCourseOnServer,
} from '../../services';
import { Action } from 'redux';

export const asyncDeleteCourse =
	(id: string, token: string): ThunkAction<void, StoreState, unknown, Action> =>
	async (dispatch) => {
		await deleteCourseFromServer(id, token);
		dispatch(deleteCourse(id));
	};

export const asyncAddNewCourse =
	(
		course: Course,
		token: string
	): ThunkAction<void, StoreState, unknown, Action> =>
	async (dispatch) => {
		const response = await addCourseOnServer(course, token);
		response && dispatch(addNewCourse(response.result));
	};

export const asyncUpdateCourse =
	(
		course: Course,
		token: string
	): ThunkAction<void, StoreState, unknown, Action> =>
	async (dispatch) => {
		const response = await updateCourseOnServer(course, token);
		response && dispatch(updateCourse(response.result));
	};

export const asyncSetCourses =
	(): ThunkAction<void, StoreState, unknown, Action> => async (dispatch) => {
		const response = await fetchAllCourses();
		response && dispatch(setCourses(response.result));
	};

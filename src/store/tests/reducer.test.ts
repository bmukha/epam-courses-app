import { coursesReducer } from '../courses/reducer';

import { addNewCourse, setCourses } from '../courses/actionCreators';

import { mockedCoursesList } from '../../constants';

const initialState: Course[] = [];

describe('Courses reducer', () => {
	test('renders authors list', () => {
		expect(coursesReducer(undefined, { type: undefined })).toEqual(
			initialState
		);
	});

	test('handles creation of a new course and returns new state', (): void => {
		const course = mockedCoursesList[0];

		expect(coursesReducer(initialState, addNewCourse(course))).toEqual([
			course,
		]);
	});

	test('handles getting the list of courses and returns new state', (): void => {
		expect(coursesReducer(initialState, setCourses(mockedCoursesList))).toEqual(
			mockedCoursesList
		);
	});
});

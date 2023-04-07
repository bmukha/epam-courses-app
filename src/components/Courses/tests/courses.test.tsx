import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import Courses from '../Courses';

import {
	ADD_NEW_COURSE_BUTTON_TEXT,
	mockedState,
	mockedStateWithZeroCourses,
} from '../../../constants';

describe('Courses component', (): void => {
	const store = createStore((state = mockedState) => state, mockedState);
	const { courses } = mockedState;

	test('renders amount of CourseCard elements equal to length of courses array', (): void => {
		render(
			<Provider store={store}>
				<Router>
					<Courses />
				</Router>
			</Provider>
		);

		expect(screen.queryAllByRole('listitem')).toHaveLength(courses.length);
	});

	test('renders empty container if courses array has no courses', (): void => {
		const store = createStore(
			(state = mockedStateWithZeroCourses) => state,
			mockedStateWithZeroCourses
		);

		render(
			<Provider store={store}>
				<Router>
					<Courses />
				</Router>
			</Provider>
		);

		expect(screen.queryAllByRole('listitem')).toHaveLength(0);
	});

	test('renders CourseForm element after Add New Course button click', (): void => {
		render(
			<Provider store={store}>
				<Router>
					<Courses />
				</Router>
			</Provider>
		);

		fireEvent.click(screen.getByText(ADD_NEW_COURSE_BUTTON_TEXT));

		expect(window.location.pathname).toBe('/courses/add');
	});
});

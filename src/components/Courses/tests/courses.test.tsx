import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Courses from '../Courses';

import {
	ADD_NEW_COURSE_BUTTON_TEXT,
	mockedStore,
	mockedStoreWithZeroCourses,
} from '../../../constants';

describe('Courses component', (): void => {
	const courses = mockedStore.getState().courses;

	test('renders amount of CourseCard elements equal to length of courses array', (): void => {
		render(
			<Provider store={mockedStore}>
				<Router>
					<Courses />
				</Router>
			</Provider>
		);

		expect(screen.queryAllByRole('listitem')).toHaveLength(courses.length);
	});

	test('renders empty container if courses array has no courses', (): void => {
		render(
			<Provider store={mockedStoreWithZeroCourses}>
				<Router>
					<Courses />
				</Router>
			</Provider>
		);

		expect(screen.queryByRole('list')).toBeEmptyDOMElement();
	});

	test('renders CourseForm element after Add New Course button click', (): void => {
		render(
			<Provider store={mockedStore}>
				<Router>
					<Courses />
				</Router>
			</Provider>
		);

		fireEvent.click(screen.getByText(ADD_NEW_COURSE_BUTTON_TEXT));

		expect(window.location.pathname).toBe('/courses/add');
	});
});

import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import CourseCard from '../CourseCard';

import { mockedStore } from '../../../../../constants';

import {
	dateFormatter,
	getAuthorsNamesById,
	pipeDuration,
} from '../../../../../helpers';

describe('CourseCard component', (): void => {
	const course = mockedStore.getState().courses[0];
	const { authors } = mockedStore.getState();

	test('renders title', (): void => {
		render(
			<Provider store={mockedStore}>
				<Router>
					<CourseCard courseToRender={course} />
				</Router>
			</Provider>
		);

		expect(screen.getByText(course.title)).toBeInTheDocument();
	});

	test('renders description', (): void => {
		render(
			<Provider store={mockedStore}>
				<Router>
					<CourseCard courseToRender={course} />
				</Router>
			</Provider>
		);

		expect(screen.getByText(`${course.description}`)).toBeInTheDocument();
	});

	test('renders duration in the correct format', (): void => {
		render(
			<Provider store={mockedStore}>
				<Router>
					<CourseCard courseToRender={course} />
				</Router>
			</Provider>
		);

		expect(
			screen.getByText(`${pipeDuration(course.duration)} hours`)
		).toBeInTheDocument();
	});

	test('renders authors list', (): void => {
		render(
			<Provider store={mockedStore}>
				<Router>
					<CourseCard courseToRender={course} />
				</Router>
			</Provider>
		);

		expect(
			screen.getByText(getAuthorsNamesById(course.authors, authors).join(', '))
		).toBeInTheDocument();
	});

	test('renders creation date in the correct format', (): void => {
		render(
			<Provider store={mockedStore}>
				<Router>
					<CourseCard courseToRender={course} />
				</Router>
			</Provider>
		);

		expect(
			screen.getByText(dateFormatter(course.creationDate))
		).toBeInTheDocument();
	});
});

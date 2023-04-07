import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import CourseCard from '../CourseCard';

import { mockedState } from '../../../../../constants';

import {
	dateFormatter,
	getAuthorsNamesById,
	pipeDuration,
} from '../../../../../helpers';

describe('CourseCard component', (): void => {
	const store = createStore((state = mockedState) => state, mockedState);
	const course = mockedState.courses[0];
	const { authors } = mockedState;

	test('renders title', (): void => {
		render(
			<Provider store={store}>
				<Router>
					<CourseCard courseToRender={course} />
				</Router>
			</Provider>
		);

		expect(screen.getByText(course.title)).toBeInTheDocument();
	});

	test('renders description', (): void => {
		render(
			<Provider store={store}>
				<Router>
					<CourseCard courseToRender={course} />
				</Router>
			</Provider>
		);

		expect(screen.getByText(`${course.description}`)).toBeInTheDocument();
	});

	test('renders duration in the correct format', (): void => {
		render(
			<Provider store={store}>
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
			<Provider store={store}>
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
			<Provider store={store}>
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

import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import CourseCard from '../CourseCard';

import { mockedState } from '../../../../../constants';

describe('CourseCard component', (): void => {
	const store = createStore((state = mockedState) => state, mockedState);

	const course: Course = {
		id: '12345',
		title: 'this is title',
		description: 'this is description',
		creationDate: '01/01/2005',
		duration: 127,
		authors: [
			'27cc3006-e93a-4748-8ca8-73d06aa93b6d',
			'f762978b-61eb-4096-812b-ebde22838167',
		],
	};

	test('renders title', (): void => {
		render(
			<Provider store={store}>
				<Router>
					<CourseCard courseToRender={course} />
				</Router>
			</Provider>
		);

		expect(screen.getByText('this is title')).toBeInTheDocument();
	});

	test('renders description', (): void => {
		render(
			<Provider store={store}>
				<Router>
					<CourseCard courseToRender={course} />
				</Router>
			</Provider>
		);

		expect(screen.getByText('this is description')).toBeInTheDocument();
	});

	test('renders duration in the correct format', (): void => {
		render(
			<Provider store={store}>
				<Router>
					<CourseCard courseToRender={course} />
				</Router>
			</Provider>
		);

		expect(screen.getByText('02:07 hours')).toBeInTheDocument();
	});

	test('renders authors list', (): void => {
		render(
			<Provider store={store}>
				<Router>
					<CourseCard courseToRender={course} />
				</Router>
			</Provider>
		);

		expect(screen.getByText('Vasiliy Dobkin, Nicolas Kim')).toBeInTheDocument();
	});

	test('renders creation date in the correct format', (): void => {
		render(
			<Provider store={store}>
				<Router>
					<CourseCard courseToRender={course} />
				</Router>
			</Provider>
		);

		expect(screen.getByText('01.01.2005')).toBeInTheDocument();
	});
});

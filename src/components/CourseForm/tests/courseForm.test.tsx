import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import CourseForm from '../CourseForm';

import {
	ADD_AUTHOR_BUTTON_TEXT,
	CREATE_AUTHOR_BUTTON_TEXT,
	DELETE_AUTHOR_BUTTON_TEXT,
	mockedStore,
} from '../../../constants';

describe('CourseForm component', (): void => {
	test('renders list of authors', (): void => {
		render(
			<Provider store={mockedStore}>
				<Router>
					<CourseForm />
				</Router>
			</Provider>
		);

		expect(screen.queryAllByRole('listitem')).toHaveLength(
			mockedStore.getState().authors.length
		);
	});

	test('calls dispatch after Create Author button click', async (): Promise<void> => {
		render(
			<Provider store={mockedStore}>
				<Router>
					<CourseForm />
				</Router>
			</Provider>
		);

		fireEvent.change(screen.getByPlaceholderText('Enter author name...'), {
			target: { value: 'New AuthorName' },
		});
		fireEvent.click(screen.getByText(CREATE_AUTHOR_BUTTON_TEXT));

		await waitFor((): void =>
			expect(mockedStore.dispatch).toHaveBeenCalledTimes(1)
		);
	});

	test('adds author to course authors list after "Add author" button click', (): void => {
		render(
			<Provider store={mockedStore}>
				<Router>
					<CourseForm />
				</Router>
			</Provider>
		);

		fireEvent.click(screen.getAllByText(ADD_AUTHOR_BUTTON_TEXT)[1]);

		expect(screen.getAllByText(DELETE_AUTHOR_BUTTON_TEXT)).toHaveLength(1);
	});

	test('deletes author from course authors list after "Delete author" button click', (): void => {
		render(
			<Provider store={mockedStore}>
				<Router>
					<CourseForm />
				</Router>
			</Provider>
		);

		fireEvent.click(screen.getAllByText(ADD_AUTHOR_BUTTON_TEXT)[1]);

		expect(screen.getAllByText(DELETE_AUTHOR_BUTTON_TEXT)).toHaveLength(1);

		fireEvent.click(screen.getAllByText(DELETE_AUTHOR_BUTTON_TEXT)[0]);

		expect(
			screen.getByText('Course authors').nextSibling
		).toBeEmptyDOMElement();
	});
});

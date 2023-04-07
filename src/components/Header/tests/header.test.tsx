import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Header from '../Header';
import { mockedState } from '../../../constants';

describe('Header component', (): void => {
	const store = createStore((state = mockedState) => state, mockedState);

	test('renders logo image with alt text "epam logo"', (): void => {
		const { getByAltText } = render(
			<Provider store={store}>
				<Router>
					<Header />
				</Router>
			</Provider>
		);

		expect(getByAltText('epam logo')).toBeInTheDocument();
	});

	test('renders username from state', (): void => {
		const { getByText } = render(
			<Provider store={store}>
				<Router>
					<Header />
				</Router>
			</Provider>
		);

		expect(getByText('Bohdan')).toBeInTheDocument();
	});
});

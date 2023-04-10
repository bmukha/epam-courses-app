import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Header from '../Header';

import { mockedStore } from '../../../constants';

describe('Header component', (): void => {
	test('renders logo image with alt text "epam logo"', (): void => {
		const { getByAltText } = render(
			<Provider store={mockedStore}>
				<Router>
					<Header />
				</Router>
			</Provider>
		);

		expect(getByAltText('epam logo')).toBeInTheDocument();
	});

	test('renders username from state', (): void => {
		const { getByText } = render(
			<Provider store={mockedStore}>
				<Router>
					<Header />
				</Router>
			</Provider>
		);

		expect(getByText('Bohdan')).toBeInTheDocument();
	});
});

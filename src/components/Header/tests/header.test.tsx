import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Header from '../Header';

const initialState = { user: { name: 'Bohdan' } };

describe('Header component', () => {
	it('renders logo image with alt text "logo" and user name from state', () => {
		const store = createStore((state = initialState) => state, initialState);

		const { getByAltText, getByText } = render(
			<Provider store={store}>
				<Router>
					<Header />
				</Router>
			</Provider>
		);

		const logoImage = getByAltText('epam logo');
		const userName = getByText('Bohdan');

		expect(logoImage).toBeInTheDocument();
		expect(userName).toBeInTheDocument();
	});
});

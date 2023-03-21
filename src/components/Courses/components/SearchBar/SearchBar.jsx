import { useState } from 'react';

import { Button, Input } from '../../../../common';

import { SEARCH_BUTTON_TEXT } from '../../../../constants';

import StyledSearchBar from './SearchBar.styles';

const SearchBar = ({ setSearchText }) => {
	const [query, setQuery] = useState('');

	const handleInputChange = ({ target }) => {
		if (!target.value) {
			setSearchText('');
		}
		setQuery(target.value);
	};

	const handleSearchButtonClick = (e) => {
		e.preventDefault();
		setSearchText(query);
	};

	return (
		<StyledSearchBar align='center' gap='1rem' flexwrap>
			<Input
				labelText=''
				placeholderText='Enter course name or id...'
				type='text'
				value={query}
				onChange={handleInputChange}
			/>
			<Button text={SEARCH_BUTTON_TEXT} onClick={handleSearchButtonClick} />
		</StyledSearchBar>
	);
};
export default SearchBar;

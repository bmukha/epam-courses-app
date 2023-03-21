import { useState } from 'react';

import { Button, Input } from '../../../../common';

import { SEARCH_BUTTON_TEXT } from '../../../../constants';

import StyledSearchBar from './SearchBar.styles';

const SearchBar = ({ courses, setCoursesToDisplay }) => {
	const [query, setQuery] = useState('');

	const handleInputChange = ({ target }) => {
		if (!target.value) {
			setCoursesToDisplay(courses);
		}
		setQuery(target.value);
	};

	const handleSearchButtonClick = (e) => {
		e.preventDefault();
		const filteredCourses = courses.filter(
			({ id, title }) =>
				id.toLowerCase().includes(query.toLowerCase()) ||
				title.toLowerCase().includes(query.toLowerCase())
		);
		setCoursesToDisplay(filteredCourses);
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

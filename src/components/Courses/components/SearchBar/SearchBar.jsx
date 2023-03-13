import { useState } from 'react';

import { Button, Input, FlexContainer } from '../../../../common';

import styled from 'styled-components';

const StyledSearchBar = styled(FlexContainer).attrs({ as: 'form' })`
	margin: 0 auto;

	& > * {
		margin: 0 auto;
	}
`;

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
		const filteredCourses = courses.filter(({ id, title }) => {
			return (
				id.toLowerCase().includes(query.toLowerCase()) ||
				title.toLowerCase().includes(query.toLowerCase())
			);
		});
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
			<Button text='Search' onClick={handleSearchButtonClick} />
		</StyledSearchBar>
	);
};
export default SearchBar;

import { Button, Input, FlexContainer } from '../../../../common';

import styled from 'styled-components';

const StyledSearchBar = styled(FlexContainer).attrs({ as: 'form' })``;

const SearchBar = ({ query, setQuery }) => {
	const handleInputChange = ({ target }) => {
		setQuery(target.value);
	};

	const handleSearchButtonClick = (e) => {
		e.preventDefault();
		// displayFilteredCourses();
		//TODO
	};

	return (
		<StyledSearchBar align='center' gap='1rem'>
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

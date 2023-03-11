import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';

import styled from 'styled-components';

const StyledForm = styled.form`
	padding: 1rem;
	display: flex;
	align-items: baseline;
	gap: 1rem;
`;

const SearchBar = ({ query, setQuery, displayFilteredCourses }) => {
	const handleInputChange = ({ target }) => {
		setQuery(target.value);
	};
	const handleSearchButtonClick = (e) => {
		e.preventDefault();
		displayFilteredCourses();
	};
	return (
		<StyledForm>
			<Input
				labelText=''
				placeholderText='Enter course name or id...'
				type='text'
				value={query}
				onChange={handleInputChange}
			/>
			<Button text='Search' onClick={handleSearchButtonClick} />
		</StyledForm>
	);
};
export default SearchBar;

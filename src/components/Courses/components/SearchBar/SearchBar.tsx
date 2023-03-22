import { ChangeEventHandler, MouseEventHandler, useState } from 'react';

import { Button, Input, Label } from '../../../../common';

import { SEARCH_BUTTON_TEXT } from '../../../../constants';

import StyledSearchBar from './SearchBar.styles';

interface SearchBarProps {
	setSearchText: unknown;
}

const SearchBar = ({ setSearchText }: SearchBarProps) => {
	const [query, setQuery] = useState('');

	const handleInputChange: ChangeEventHandler<HTMLInputElement> = ({
		target,
	}) => {
		if (!target.value) {
			// setSearchText('');
		}
		setQuery(target.value);
	};

	const handleSearchButtonClick: MouseEventHandler<HTMLButtonElement> = (e) => {
		e.preventDefault();
		// setSearchText(query);
	};

	return (
		<StyledSearchBar as='form' align='center' gap='1rem' flexwrap>
			<Label>
				<Input
					placeholder='Enter course name or id...'
					value={query}
					onChange={handleInputChange}
				/>
			</Label>
			<Button onClick={handleSearchButtonClick}>{SEARCH_BUTTON_TEXT}</Button>
		</StyledSearchBar>
	);
};
export default SearchBar;

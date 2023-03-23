import {
	ChangeEventHandler,
	Dispatch,
	FormEventHandler,
	useState,
} from 'react';

import { Button, Input, Label } from '../../../../common';

import { SEARCH_BUTTON_TEXT } from '../../../../constants';

import StyledSearchBar from './SearchBar.styles';

interface SearchBarProps extends FlexContainerProps {
	setSearchText: Dispatch<React.SetStateAction<string>>;
}

const SearchBar = ({ setSearchText }: SearchBarProps) => {
	const [query, setQuery] = useState('');

	const handleInputChange: ChangeEventHandler<HTMLInputElement> = ({
		target,
	}) => {
		if (!target.value) {
			setSearchText('');
		}
		setQuery(target.value);
	};

	const handleSearchFormSubmit: FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
		setSearchText(query);
	};

	return (
		<StyledSearchBar
			forwardedAs='form'
			align='center'
			gap='1rem'
			flexwrap
			onSubmit={handleSearchFormSubmit}
		>
			<Label>
				<Input
					placeholder='Enter course name or id...'
					value={query}
					onChange={handleInputChange}
				/>
			</Label>
			<Button type='submit'>{SEARCH_BUTTON_TEXT}</Button>
		</StyledSearchBar>
	);
};
export default SearchBar;

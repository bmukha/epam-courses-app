import {
	ChangeEventHandler,
	Dispatch,
	SetStateAction,
	FC,
	FormEventHandler,
	useState,
} from 'react';

import { Button, Input, Label } from '../../../../common';

import { SEARCH_BUTTON_TEXT } from '../../../../constants';

import StyledSearchBar from './SearchBar.styles';

interface SearchBarProps extends FlexContainerProps {
	setSearchText: Dispatch<SetStateAction<string>>;
}

const SearchBar: FC<SearchBarProps> = ({ setSearchText }) => {
	const [query, setQuery] = useState<string>('');

	const handleInputChange: ChangeEventHandler<HTMLInputElement> = ({
		target: { value },
	}): void => {
		if (!value) {
			setSearchText('');
		}
		setQuery(value);
	};

	const handleSearchFormSubmit: FormEventHandler<HTMLFormElement> = (
		e
	): void => {
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

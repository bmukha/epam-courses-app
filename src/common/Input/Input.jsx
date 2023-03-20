import { FlexContainer } from '../';

import styled from 'styled-components';

const StyledInput = styled(FlexContainer).attrs({ as: 'label' })`
	& > input,
	& > textarea {
		padding: 0.5rem;
		border: 3px solid lightgray;
		border-radius: 10px;
	}

	&:has(textarea) {
		width: 100%;
	}

	& input {
		height: 35px;
	}

	& textarea {
		width: 100%;
		flex-grow: 1;
	}
`;

const Input = ({
	labelText,
	placeholderText,
	type,
	value,
	onChange,
	rows,
	min,
	minLength,
	required,
}) => (
	<StyledInput column gap='0.5rem'>
		{labelText}
		{type === 'textarea' ? (
			<textarea
				value={value}
				placeholder={placeholderText}
				onChange={onChange}
				rows={rows}
				minLength={minLength}
				required={required}
			/>
		) : (
			<input
				type={type}
				value={value}
				min={min}
				minLength={minLength}
				placeholder={placeholderText}
				onChange={onChange}
				required
			/>
		)}
	</StyledInput>
);

export default Input;

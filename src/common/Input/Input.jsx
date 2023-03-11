import styled from 'styled-components';

const StyledInput = styled.label`
	display: flex;
	flex-direction: column;
	align-items: start;
	gap: 0.5em;
`;

const Input = ({ labelText, placeholderText, type, value, onChange, rows }) => (
	<StyledInput>
		{labelText}
		{type === 'textarea' ? (
			<textarea
				value={value}
				placeholder={placeholderText}
				onChange={onChange}
				rows={rows}
			/>
		) : (
			<input
				type={type}
				value={value}
				placeholder={placeholderText}
				onChange={onChange}
			/>
		)}
	</StyledInput>
);

export default Input;

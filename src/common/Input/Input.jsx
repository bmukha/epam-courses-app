import StyledInput from './Input.styles';

const Input = ({
	labelText,
	placeholderText,
	type,
	value,
	onChange,
	rows,
	min,
	step,
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
				step={step}
				minLength={minLength}
				placeholder={placeholderText}
				onChange={onChange}
				required
			/>
		)}
	</StyledInput>
);

export default Input;

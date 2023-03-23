import { InputHTMLAttributes } from 'react';

import StyledInput from './Input.styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = ({
	type = 'text',
	value,
	onChange,
	onKeyDown,
	min,
	placeholder,
	step,
	minLength,
	required,
}: InputProps) => (
	<StyledInput
		type={type}
		value={value}
		onChange={onChange}
		onKeyDown={onKeyDown}
		min={min}
		placeholder={placeholder}
		step={step}
		minLength={minLength}
		required={required}
	/>
);

export default Input;

import { InputHTMLAttributes } from 'react';
import StyledInput from './Input.styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = ({
	type = 'text',
	value,
	onChange,
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
		min={min}
		placeholder={placeholder}
		step={step}
		minLength={minLength}
		required={required}
	/>
);

export default Input;

// interface InputProps extends FlexContainerProps {
// 	labelText: string;
// 	placeholderText: string;
// 	type: HTMLInputTypeAttribute;
// 	value: 'string';
// 	onChange: ChangeEventHandler<HTMLTextAreaElement>;
// 	rows?: number;
// 	min?: number;
// 	step?: number;
// 	minLength?: number;
// 	required: boolean;
// }

// const Input = ({
// 	labelText,
// 	placeholderText,
// 	type,
// 	value,
// 	onChange,
// 	rows,
// 	min,
// 	step,
// 	minLength,
// 	required,
// }: InputProps) => (
// 	<StyledInput as='label' column gap='0.5rem'>
// 		{labelText}
// 		{type === 'text' ? (
// 			<textarea
// 				value={value}
// 				placeholder={placeholderText}
// 				onChange={onChange}
// 				rows={rows}
// 				minLength={minLength}
// 				required={required}
// 			/>
// 		) : (
// 			<input
// 				type={type}
// 				value={value}
// 				min={min}
// 				step={step}
// 				minLength={minLength}
// 				placeholder={placeholderText}
// 				onChange={onChange}
// 				required
// 			/>
// 		)}
// 	</StyledInput>
// );

// export default Input;

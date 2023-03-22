import { TextareaHTMLAttributes } from 'react';

import StyledTextArea from './TextArea.styles';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

const TextArea = ({
	value,
	onChange,
	placeholder,
	minLength,
	required,
}: TextAreaProps) => (
	<StyledTextArea
		value={value}
		onChange={onChange}
		placeholder={placeholder}
		minLength={minLength}
		required={required}
	/>
);

export default TextArea;

import { FC } from 'react';

import StyledTextArea, { StyledTextAreaProps } from './TextArea.styles';

interface TextAreaProps extends StyledTextAreaProps {}

const TextArea: FC<TextAreaProps> = ({
	value,
	onChange,
	placeholder,
	minLength,
	rows,
	required,
}) => (
	<StyledTextArea
		value={value}
		onChange={onChange}
		placeholder={placeholder}
		minLength={minLength}
		rows={rows}
		required={required}
	/>
);

export default TextArea;

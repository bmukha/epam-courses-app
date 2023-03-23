import StyledTextArea, { StyledTextAreaProps } from './TextArea.styles';

interface TextAreaProps extends StyledTextAreaProps {}

const TextArea = ({
	value,
	onChange,
	placeholder,
	minLength,
	rows,
	required,
}: TextAreaProps) => (
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

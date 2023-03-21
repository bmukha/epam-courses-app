import StyledButton from './Button.styles';

const Button = ({ text, onClick, type }) => (
	<StyledButton onClick={onClick} type={type ? type : 'button'}>
		{text}
	</StyledButton>
);

export default Button;

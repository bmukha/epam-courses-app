import { ReactNode, ButtonHTMLAttributes } from 'react';

import StyledButton from './Button.styles';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
}

const Button = ({ children, onClick, type = 'button' }: ButtonProps) => (
	<StyledButton onClick={onClick} type={type}>
		{children}
	</StyledButton>
);

export default Button;

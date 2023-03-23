import { ReactNode, ButtonHTMLAttributes, FC } from 'react';

import StyledButton from './Button.styles';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
}

const Button: FC<ButtonProps> = ({ children, onClick, type = 'button' }) => (
	<StyledButton onClick={onClick} type={type}>
		{children}
	</StyledButton>
);

export default Button;

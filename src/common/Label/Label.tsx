import { LabelHTMLAttributes, ReactNode } from 'react';

import StyledLabel from './Label.styles';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
	className?: string;
	labelText?: string;
	children?: ReactNode;
}

const Label = ({ className, labelText, children }: LabelProps) => (
	<StyledLabel className={className}>
		{labelText}
		{children}
	</StyledLabel>
);

export default Label;

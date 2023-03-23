import { LabelHTMLAttributes, ReactNode } from 'react';

import StyledLabel from './Label.styles';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
	labelText?: string;
	children?: ReactNode;
}

const Label = ({ labelText, children }: LabelProps) => (
	<StyledLabel forwardedAs='label' column gap='0.5rem'>
		{labelText}
		{children}
	</StyledLabel>
);

export default Label;

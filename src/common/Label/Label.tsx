import { LabelHTMLAttributes, ReactNode } from 'react';

import StyledLabel from './Label.styles';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
	children: ReactNode;
	labelText?: string;
}

const Label = ({ children, labelText }: LabelProps) => (
	<StyledLabel as='label' column>
		{labelText}
		{children}
	</StyledLabel>
);

export default Label;

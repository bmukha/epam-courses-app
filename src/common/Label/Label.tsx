import { ReactNode } from 'react';

import StyledLabel, { StyledLabelProps } from './Label.styles';

interface LabelProps extends StyledLabelProps {
	labelText?: string;
	children?: ReactNode;
}

const Label = ({ labelText, children, ...props }: LabelProps) => (
	<StyledLabel forwardedAs='label' {...props}>
		{labelText}
		{children}
	</StyledLabel>
);

export default Label;

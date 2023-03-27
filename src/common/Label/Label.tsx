import { FC, ReactNode } from 'react';

import StyledLabel, { StyledLabelProps } from './Label.styles';
interface LabelProps extends StyledLabelProps {
	labelText?: string;
	children?: ReactNode;
}

const Label: FC<LabelProps> = ({ labelText, children, ...props }) => (
	<StyledLabel forwardedAs='label' {...props}>
		{labelText}
		{children}
	</StyledLabel>
);

export default Label;

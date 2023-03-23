import StyledFormGroupWrapper from './FormGroupWrapper.styles';

interface FormGroupWrapperProps extends FlexContainerProps {
	title: string;
}

const FormGroupWrapper = ({ title, children }: FormGroupWrapperProps) => {
	return (
		<StyledFormGroupWrapper
			column
			align='center'
			alignContent='space-around'
			gap='1rem'
			grow={1}
			shrink={1}
			basis='200px'
			flexwrap
			addBorder
		>
			<h3>{title}</h3>
			{children}
		</StyledFormGroupWrapper>
	);
};
export default FormGroupWrapper;

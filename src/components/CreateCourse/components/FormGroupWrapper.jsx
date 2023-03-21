import StyledFormGroupWrapper from './FormGroupWrapper.styles';

const FormGroupWrapper = ({ title, children }) => {
	return (
		<StyledFormGroupWrapper
			column
			align='center'
			alignContent='space-around'
			gap='1rem'
			grow='1'
			shrink='1'
			basis='200px'
			flexwrap
		>
			<h3>{title}</h3>
			{children}
		</StyledFormGroupWrapper>
	);
};
export default FormGroupWrapper;

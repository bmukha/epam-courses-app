import { BorderedFlexContainer } from '../../../common';

import styled from 'styled-components';

const StyledFormGroupWrapper = styled(BorderedFlexContainer)`
	min-width: 300px;
`;

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

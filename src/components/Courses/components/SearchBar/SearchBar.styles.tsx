import { FormHTMLAttributes } from 'react';

import { FlexContainer } from '../../../../common';

import styled from 'styled-components';

interface StyledSearchBarProps
	extends FormHTMLAttributes<HTMLFormElement>,
		Omit<FlexContainerProps, 'children'> {}

const StyledSearchBar = styled(FlexContainer)<StyledSearchBarProps>``;

export default StyledSearchBar;

// import { HTMLAttributes } from 'react';

import { ReactNode } from 'react';
import styled, { css } from 'styled-components';

const borderMixin = css`
	padding: 1rem;
	border-radius: 1rem;
	box-shadow: 0 0 5px 3px lightgray;
`;

export interface StyledFlexContainerProps {
	column?: boolean;
	justify?: string;
	align?: string;
	alignContent?: string;
	flexwrap?: boolean;
	gap?: string;
	grow?: number;
	shrink?: number;
	basis?: string;
	addBorder?: boolean;
	className?: string;
	children?: ReactNode;
}

const StyledFlexContainer = styled.div<StyledFlexContainerProps>`
	display: flex;
	flex-direction: ${({ column }) => (column ? 'column' : 'row')};
	justify-content: ${({ justify }) => justify || 'start'};
	align-items: ${({ align }) => align || 'stretch'};
	align-content: ${({ alignContent }) => alignContent || 'stretch'};
	flex-wrap: ${({ flexwrap }) => (flexwrap ? 'wrap' : 'nowrap')};
	gap: ${({ gap }) => gap || 0};
	flex-grow: ${({ grow }) => grow || 0};
	flex-shrink: ${({ shrink }) => shrink || 1};
	flex-basis: ${({ basis }) => basis || 'auto'};
	${({ addBorder }) => (addBorder ? borderMixin : '')};
`;

export default StyledFlexContainer;

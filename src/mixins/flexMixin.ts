import { css } from 'styled-components';

export interface FlexMixinProps {
	column?: boolean;
	justify?: string;
	align?: string;
	alignContent?: string;
	flexwrap?: boolean;
	gap?: string;
	grow?: number;
	shrink?: number;
	basis?: string;
}

const flexMixin = ({
	column,
	justify,
	align,
	alignContent,
	flexwrap,
	gap,
	grow,
	shrink,
	basis,
}: FlexMixinProps) =>
	css<FlexMixinProps>`
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
	`;

export default flexMixin;

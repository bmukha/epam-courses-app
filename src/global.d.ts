import { HTMLAttributes, HTMLElement } from 'react';

export interface FlexContainerProps {
	as: HTMLAttributes<HTMLElement>;
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

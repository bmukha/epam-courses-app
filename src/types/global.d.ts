declare interface Author {
	id: string;
	name: string;
}
declare interface Course {
	id: string;
	title: string;
	description: string;
	creationDate: string;
	duration: number;
	authors: string[];
}
declare interface FlexMixinProps {
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
declare interface StyledFlexContainerProps extends FlexMixinProps {
	forwardedAs?: keyof HTMLElementTagNameMap;
	addBorder?: boolean;
	className?: string;
}
declare interface FlexContainerProps extends StyledFlexContainerProps {
	children?: ReactNode | ReactNode[];
}

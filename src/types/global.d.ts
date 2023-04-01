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
	children?: ReactNode;
}

declare module '*.png' {
	const path: string;
	export default path;
}

declare interface LoggedUser {
	name: string;
	email: string;
	token: string;
}

declare interface UserLoginData {
	email: string;
	name: string;
}
declare interface UserLoginPostData {
	email: string;
	password: string;
}
declare interface LoginApiResponse {
	successful: true;
	result: string;
	user: UserLoginData;
}
declare interface UserRegisterData extends UserLoginPostData {
	name: string;
}
declare interface RegisterApiResponse {
	successful: true;
	result: string;
}
declare interface CoursesApiResponse {
	successful: true;
	result: Course[];
}
declare interface AuthorsApiResponse {
	successful: true;
	result: Author[];
}

declare interface LogoutApiResponse {
	successful: true;
}
declare interface UserApiResponse {
	successful: false;
	result: {
		id: string;
		name: string;
		email: string;
		password: string;
		role: string;
	};
}
declare interface ApiError {
	successful: false;
	result: string;
	error?: string;
	errors?: string[];
}
declare interface User {
	isAuth: boolean;
	name: string;
	email: string;
	token: string;
	role: string;
}
declare interface Author {
	id: string;
	name: string;
}
interface StoreState {
	user: User;
	courses: Course[];
	authors: Author[];
}

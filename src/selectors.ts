export const userNameSelector = ({ user: { name } }: StoreState): string =>
	name;

export const isUserAuthSelector = ({ user: { isAuth } }: StoreState): boolean =>
	isAuth;

export const coursesSelector = ({ courses }: StoreState): Course[] => courses;

export const authorsSelector = ({ authors }: StoreState): Author[] => authors;

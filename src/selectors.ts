export const userNameSelector = ({ user: { name } }: StoreState): string =>
	name;

export const userAuthStatusSelector = ({
	user: { isAuth },
}: StoreState): boolean => isAuth;

export const userRoleSelector = ({ user: { role } }: StoreState): string =>
	role;

export const coursesSelector = ({ courses }: StoreState): Course[] => courses;

export const authorsSelector = ({ authors }: StoreState): Author[] => authors;

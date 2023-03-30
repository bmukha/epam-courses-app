export const getUser = ({ user }: StoreState): User => user;

export const getUserName = ({ user: { name } }: StoreState): string => name;

export const getUserAuthStatus = ({ user: { isAuth } }: StoreState): boolean =>
	isAuth;

export const getCourses = ({ courses }: StoreState): Course[] => courses;

export const getCourseById = (
	{ courses }: StoreState,
	id: string
): Course | undefined => courses.find((course) => course.id === id);

export const getAuthors = ({ authors }: StoreState): Author[] => authors;

export const getUser = ({ user }: StoreState): User => user;

export const getUserName = ({ user: { name } }: StoreState): string => name;

export const getUserAuthStatus = ({ user: { isAuth } }: StoreState): boolean =>
	isAuth;

export const getCourses = ({ courses }: StoreState): Course[] => courses;

export const getAuthors = ({ authors }: StoreState): Author[] => authors;

// export const getQuery = (state: StoreState) => state.query;

// export const getIsInitialDataFetched = (state: StoreState) =>
// 	state.isInitialDataFetched;

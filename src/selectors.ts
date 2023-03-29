export const getUser = (state: StoreState): User => state.user;

export const getUserName = (state: StoreState): string => state.user.name;

export const getUserAuthStatus = (state: StoreState): boolean =>
	state.user.isAuth;

export const getCourses = (state: StoreState): Course[] => state.courses;

export const getAuthors = (state: StoreState): Author[] => state.authors;

// export const getQuery = (state: StoreState) => state.query;

// export const getIsInitialDataFetched = (state: StoreState) =>
// 	state.isInitialDataFetched;

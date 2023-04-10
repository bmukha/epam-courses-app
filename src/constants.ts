export const mockedCoursesList: Course[] = [
	{
		id: 'de5aaa59-90f5-4dbc-b8a9-aaf205c551ba',
		title: 'JavaScript',
		description:
			'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
		creationDate: '8/3/2021',
		duration: 160,
		authors: [
			'27cc3006-e93a-4748-8ca8-73d06aa93b6d',
			'f762978b-61eb-4096-812b-ebde22838167',
		],
	},
	{
		id: 'b5630fdd-7bf7-4d39-b75a-2b5906fd0916',
		title: 'Angular',
		description: `Lorem Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum
has been the industry's standard dummy text ever since the
1500s, when an unknown
printer took a galley of type and scrambled it to make a type
specimen book.`,
		creationDate: '10/11/2020',
		duration: 210,
		authors: [
			'df32994e-b23d-497c-9e4d-84e4dc02882f',
			'095a1817-d45b-4ed7-9cf7-b2417bcbf748',
		],
	},
];

export const mockedAuthorsList: Author[] = [
	{
		id: '27cc3006-e93a-4748-8ca8-73d06aa93b6d',
		name: 'Vasiliy Dobkin',
	},
	{
		id: 'f762978b-61eb-4096-812b-ebde22838167',
		name: 'Nicolas Kim',
	},
	{
		id: 'df32994e-b23d-497c-9e4d-84e4dc02882f',
		name: 'Anna Sidorenko',
	},
	{
		id: '095a1817-d45b-4ed7-9cf7-b2417bcbf748',
		name: 'Valentina Larina',
	},
];

export const mockedStore = {
	getState: () => mockedState,
	subscribe: jest.fn(),
	dispatch: jest.fn(),
	replaceReducer: jest.fn(),
	[Symbol.observable]: jest.fn(),
};

export const mockedStoreWithZeroCourses = {
	getState: () => mockedStateWithZeroCourses,
	subscribe: jest.fn(),
	dispatch: jest.fn(),
	replaceReducer: jest.fn(),
	[Symbol.observable]: jest.fn(),
};

export const mockedState: StoreState = {
	user: {
		isAuth: true,
		name: 'Bohdan',
		email: 'bohdan@mail.ua',
		token: 'Bearer lakdsafjsaodif',
		role: 'admin',
	},
	courses: [...mockedCoursesList],
	authors: [...mockedAuthorsList],
};

export const mockedStateWithZeroCourses: StoreState = {
	user: {
		isAuth: true,
		name: 'Bohdan',
		email: 'bohdan@mail.ua',
		token: 'Bearer lakdsafjsaodif',
		role: 'admin',
	},
	courses: [],
	authors: [...mockedAuthorsList],
};

export const SHOW_COURSE_BUTTON_TEXT = 'Show course';
export const LOGOUT_BUTTON_TEXT = 'Logout';
export const SEARCH_BUTTON_TEXT = 'Search';
export const ADD_NEW_COURSE_BUTTON_TEXT = 'Add new course';
export const CREATE_COURSE_BUTTON_TEXT = 'Create course';
export const UPDATE_COURSE_BUTTON_TEXT = 'Update course';
export const CANCEL_BUTTON_TEXT = 'Cancel';
export const ADD_AUTHOR_BUTTON_TEXT = 'Add author';
export const DELETE_AUTHOR_BUTTON_TEXT = 'Delete author';
export const CREATE_AUTHOR_BUTTON_TEXT = 'Create author';
export const BACK_TO_COURSES_BUTTON_TEXT = '< Back to courses';
export const LOGIN_BUTTON_TEXT = 'Login';
export const REGISTRATION_BUTTON_TEXT = 'Registration';

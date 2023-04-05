import { rootReducer } from '../index';

const initialState: StoreState = {
	user: {
		isAuth: false,
		name: '',
		email: '',
		token: '',
		role: '',
	},
	courses: [],
	authors: [],
};

test('should return the initial state', () => {
	expect(rootReducer(undefined, { type: undefined })).toEqual(initialState);
});

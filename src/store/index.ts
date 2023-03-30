import {
	legacy_createStore as createStore,
	combineReducers,
	Reducer,
	CombinedState,
	Store,
} from 'redux';

import { composeWithDevTools } from '@redux-devtools/extension';

import userReducer from './user/reducer';
import coursesReducer from './courses/reducer';
import authorsReducer from './authors/reducer';
import { AuthorActions } from './authors/actionCreators';
import { CourseActions } from './courses/actionCreators';
import { UserActions } from './user/actionCreators';

const rootReducer: Reducer<
	CombinedState<{
		user: User;
		courses: Course[];
		authors: Author[];
	}>,
	UserActions | CourseActions | AuthorActions
> = combineReducers({
	user: userReducer,
	courses: coursesReducer,
	authors: authorsReducer,
});

const store: Store<StoreState, AuthorActions | UserActions | CourseActions> =
	createStore(rootReducer, composeWithDevTools());

export default store;

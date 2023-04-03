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

const rootReducer: Reducer<
	CombinedState<{
		user: User;
		courses: Course[];
		authors: Author[];
	}>
> = combineReducers({
	user: userReducer,
	courses: coursesReducer,
	authors: authorsReducer,
});

const store: Store<StoreState> = createStore(
	rootReducer,
	composeWithDevTools()
);

export default store;

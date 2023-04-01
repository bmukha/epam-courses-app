import {
	legacy_createStore as createStore,
	combineReducers,
	Reducer,
	CombinedState,
	Store,
	applyMiddleware,
} from 'redux';

import { composeWithDevTools } from '@redux-devtools/extension';

import thunk from 'redux-thunk';

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
	composeWithDevTools(applyMiddleware(thunk))
);

export default store;

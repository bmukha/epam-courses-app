import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import user from './user/reducer';
import courses from './courses/reducer';
import authors from './authors/reducer';
import query from './query/reducer';
import isInitialDataFetched from './isInitialDataFetched/reducer';

const rootReducer = combineReducers({
	user,
	courses,
	authors,
	query,
	isInitialDataFetched,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;

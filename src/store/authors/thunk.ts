import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { addNewAuthor, setAuthors } from './actionCreators';

import { addAuthorOnServer, fetchAllAuthors } from '../../services';

export const asyncAddNewAuthor =
	(
		name: string,
		token: string
	): ThunkAction<void, StoreState, unknown, Action> =>
	async (dispatch) => {
		const response = await addAuthorOnServer(name, token);
		response && dispatch(addNewAuthor(response.result));
	};

export const asyncSetAuthors =
	(): ThunkAction<void, StoreState, unknown, Action> => async (dispatch) => {
		const response = await fetchAllAuthors();
		response && dispatch(setAuthors(response.result));
	};

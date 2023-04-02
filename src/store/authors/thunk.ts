import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { addNewAuthor } from './actionCreators';

import { addAuthorOnServer } from '../../services';

export const asyncAddNewAuthor =
	(
		name: string,
		token: string
	): ThunkAction<void, StoreState, unknown, Action> =>
	async (dispatch) => {
		const response = await addAuthorOnServer(name, token);
		response && dispatch(addNewAuthor(response.result));
	};

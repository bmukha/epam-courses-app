import { ActionCreator, Action } from 'redux';

import * as actionTypes from './actionTypes';
interface SetAuthorsAction extends Action<typeof actionTypes.SET_AUTHORS> {
	payload: Author[];
}
interface AddAuthorAction extends Action<typeof actionTypes.ADD_NEW_AUTHOR> {
	payload: Author;
}

export type AuthorActions = SetAuthorsAction | AddAuthorAction;

export const setAuthors: ActionCreator<SetAuthorsAction> = (
	authors: Author[]
): SetAuthorsAction => ({
	type: actionTypes.SET_AUTHORS,
	payload: authors,
});

export const addAuthor: ActionCreator<AddAuthorAction> = (author: Author) => ({
	type: actionTypes.ADD_NEW_AUTHOR,
	payload: author,
});

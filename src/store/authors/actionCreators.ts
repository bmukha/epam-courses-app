import { createAction } from '@reduxjs/toolkit';

import { SET_AUTHORS, ADD_NEW_AUTHOR } from './actionTypes';

export const setAuthors = createAction(SET_AUTHORS, (authors: Author[]) => ({
	payload: authors,
}));

export const addNewAuthor = createAction(ADD_NEW_AUTHOR, (author: Author) => ({
	payload: author,
}));

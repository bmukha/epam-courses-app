import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { loginUser, logoutUser } from './actionCreators';
import { setCourses } from '../courses/actionCreators';
import { setAuthors } from '../authors/actionCreators';

import { fetchUserInfo, logoutUserOnServer, postLogin } from '../../services';

export const asyncLoginUser =
	(
		userData: UserLoginPostData
	): ThunkAction<void, StoreState, unknown, Action> =>
	async (dispatch) => {
		const loginApiResponse: LoginApiResponse | undefined = await postLogin(
			userData
		);

		if (loginApiResponse) {
			const { result: token } = loginApiResponse;
			const userInfo = await fetchUserInfo(token);

			if (userInfo) {
				const { name, email, role } = userInfo.result;
				const user = { isAuth: true, name, email, token, role };
				localStorage.setItem('coursesAppUser', JSON.stringify(user));
				dispatch(loginUser(user));
			}
		}
	};

export const asyncLogoutUser =
	(token: string): ThunkAction<void, StoreState, unknown, Action> =>
	async (dispatch) => {
		await logoutUserOnServer(token);
		localStorage.removeItem('coursesAppUser');
		dispatch(logoutUser());
		dispatch(setCourses([]));
		dispatch(setAuthors([]));
	};

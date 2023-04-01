import { loginUser } from './actionCreators';

import { fetchUserInfo, postLogin } from '../../services';
import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';

export const asyncLoginUser =
	(
		userData: UserLoginPostData
	): ThunkAction<void, StoreState, unknown, Action<'LOGIN_USER'>> =>
	async (dispatch) => {
		const loginApiResponse: LoginApiResponse | undefined = await postLogin(
			userData
		);

		if (loginApiResponse) {
			const { result: token } = loginApiResponse;
			const userInfo = await fetchUserInfo(token);
			if (userInfo) {
				const { name, email, role } = userInfo.result;
				console.log('userInfo:', userInfo);
				dispatch(loginUser({ isAuth: true, name, email, token, role }));
			}
		}
	};

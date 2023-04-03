import { FC, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
	Courses,
	Registration,
	Login,
	Home,
	CourseInfo,
	NotFound,
	CourseForm,
	PrivateRouter,
} from './components';
import { Layout } from './common';

import { asyncLoginUserFromLocalStorage } from './store/user/thunk';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { userAuthStatusSelector } from './selectors';

const App: FC = () => {
	const dispatch: ThunkDispatch<StoreState, void, Action> = useDispatch();
	const isUserLoggedIn = useSelector(userAuthStatusSelector);
	const token = localStorage.getItem('coursesAppUserToken');

	useEffect(() => {
		(async () => {
			console.log('loading started');
			if (token) {
				await dispatch(asyncLoginUserFromLocalStorage(token));
			}
			console.log('loading finished');
		})();
	}, [dispatch, token, isUserLoggedIn]);

	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='registration' element={<Registration />} />
					<Route path='login' element={<Login />} />
					<Route path='courses' element={<Courses />} />
					<Route path='courses/:courseId' element={<CourseInfo />} />
					<Route element={<PrivateRouter />}>
						<Route path='courses/add' element={<CourseForm />} />
						<Route path='courses/update/:courseId' element={<CourseForm />} />
					</Route>

					<Route path='*' element={<NotFound />} />
				</Route>
			</Routes>
		</>
	);
};

export default App;

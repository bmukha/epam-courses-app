import { FC, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
	Courses,
	Registration,
	Login,
	CreateCourse,
	Home,
	CourseInfo,
	NotFound,
} from './components';
import { Layout } from './common';
import { loginUser } from './store/user/actionCreators';
import { setCourses } from './store/courses/actionCreators';
import { setAuthors } from './store/authors/actionCreators';
import { isUserAuthSelector } from './selectors';

import { fetchAllAuthors, fetchAllCourses } from './services';

const App: FC = () => {
	const dispatch = useDispatch();
	const savedUser: string | null = localStorage.getItem('coursesAppUser');
	const isUserLoggedIn = useSelector(isUserAuthSelector);

	useEffect(() => {
		if (savedUser) {
			const user: User = JSON.parse(savedUser);
			dispatch(loginUser(user));
		}
	}, [savedUser, dispatch]);

	useEffect(() => {
		if (isUserLoggedIn) {
			(async () => {
				const coursesData = await fetchAllCourses();
				const authorsData = await fetchAllAuthors();
				coursesData && dispatch(setCourses(coursesData.result));
				authorsData && dispatch(setAuthors(authorsData.result));
			})();
		}
	}, [dispatch, isUserLoggedIn]);

	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='registration' element={<Registration />} />
					<Route path='login' element={<Login />} />
					<Route path='courses' element={<Courses />} />
					<Route path='courses/:courseId' element={<CourseInfo />} />
					<Route path='courses/add' element={<CreateCourse />} />
					<Route path='*' element={<NotFound />} />
				</Route>
			</Routes>
		</>
	);
};

export default App;

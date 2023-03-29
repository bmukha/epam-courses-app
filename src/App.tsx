import { FC, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

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
import { userLoggedIn } from './store/user/actionCreators';

const App: FC = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const savedUser: string | null = localStorage.getItem('coursesAppUser');
		if (savedUser) {
			const user: User = JSON.parse(savedUser);
			dispatch(userLoggedIn(user));
		}
	}, [dispatch]);

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

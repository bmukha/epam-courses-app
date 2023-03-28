import { FC, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

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

import { mockedCoursesList, mockedAuthorsList } from './constants';

const App: FC = () => {
	const [courses, setCourses] = useState<Course[]>(mockedCoursesList);
	const [authors, setAuthors] = useState<Author[]>(mockedAuthorsList);
	const [token, setToken] = useState<string | null>(
		localStorage.getItem('coursesAppUserToken')
	);
	const [name, setName] = useState<string | null>(
		localStorage.getItem('coursesAppUserName')
	);

	return (
		<>
			<Routes>
				<Route
					path='/'
					element={<Layout name={name} setName={setName} setToken={setToken} />}
				>
					<Route index element={<Home token={token} />} />
					<Route path='registration' element={<Registration />} />
					<Route
						path='login'
						element={
							token ? (
								<Home token={token} />
							) : (
								<Login token={token} setName={setName} setToken={setToken} />
							)
						}
					/>
					<Route
						path='courses'
						element={
							token ? (
								<Courses courses={courses} authors={authors} />
							) : (
								<Home token={token} />
							)
						}
					/>
					<Route
						path='courses/:courseId'
						element={
							token ? (
								<CourseInfo courses={courses} authors={authors} />
							) : (
								<Home token={token} />
							)
						}
					/>
					<Route
						path='courses/add'
						element={
							token ? (
								<CreateCourse
									courses={courses}
									setCourses={setCourses}
									authors={authors}
									setAuthors={setAuthors}
								/>
							) : (
								<Home token={token} />
							)
						}
					/>
					<Route path='*' element={<NotFound />} />
				</Route>
			</Routes>
		</>
	);
};

export default App;

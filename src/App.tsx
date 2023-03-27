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

	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='registration' element={<Registration />} />
				<Route path='login' element={<Login />} />
				<Route
					path='courses'
					element={<Courses courses={courses} authors={authors} />}
				/>
				<Route
					path='courses/:courseId'
					element={<CourseInfo courses={courses} authors={authors} />}
				/>
				<Route
					path='courses/add'
					element={
						<CreateCourse
							courses={courses}
							setCourses={setCourses}
							authors={authors}
							setAuthors={setAuthors}
						/>
					}
				/>
			</Route>
			<Route path='*' element={<NotFound />} />
		</Routes>
	);
};

export default App;

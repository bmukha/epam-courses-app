import { useState } from 'react';

import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';
import { mockedCoursesList, mockedAuthorsList } from './constants';

const App = () => {
	const [addingMode, setAddingMode] = useState(false);
	const [courses, setCourses] = useState(mockedCoursesList);
	const [authors, setAuthors] = useState(mockedAuthorsList);
	const handleAddNewCourseButtonClick = () => setAddingMode(true);
	return (
		<>
			<Header />
			{addingMode ? (
				<CreateCourse
					authors={authors}
					setAuthors={setAuthors}
					courses={courses}
					setCourses={setCourses}
					setAddingMode={setAddingMode}
				/>
			) : (
				<Courses
					handleAddNewCourseButtonClick={handleAddNewCourseButtonClick}
					authors={authors}
					setAuthors={setAuthors}
					courses={courses}
					setCourses={setCourses}
				/>
			)}
		</>
	);
};

export default App;

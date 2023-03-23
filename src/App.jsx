import { useState } from 'react';

import { Header, Courses, CreateCourse } from './components';
import { mockedCoursesList, mockedAuthorsList } from './constants';
import { MainWrapper } from './common';

const App = () => {
	const [addingMode, setAddingMode] = useState(false);
	const [courses, setCourses] = useState(mockedCoursesList);
	const [authors, setAuthors] = useState(mockedAuthorsList);
	const handleAddNewCourseButtonClick = () => setAddingMode(true);
	return (
		<>
			<Header />
			<MainWrapper forwardedAs='main' addBorder gap='1rem'>
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
			</MainWrapper>
		</>
	);
};

export default App;

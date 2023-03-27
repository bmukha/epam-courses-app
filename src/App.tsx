import { FC, MouseEventHandler, useState } from 'react';

import { Header, Courses, CreateCourse } from './components';
import { mockedCoursesList, mockedAuthorsList } from './constants';
import { MainWrapper } from './common';

const App: FC = () => {
	const [addingMode, setAddingMode] = useState<boolean>(false);
	const [courses, setCourses] = useState<Course[]>(mockedCoursesList);
	const [authors, setAuthors] = useState<Author[]>(mockedAuthorsList);
	const handleAddNewCourseButtonClick: MouseEventHandler<
		HTMLButtonElement
	> = (): void => setAddingMode(true);
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
						courses={courses}
					/>
				)}
			</MainWrapper>
		</>
	);
};

export default App;

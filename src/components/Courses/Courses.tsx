import { FC, MouseEventHandler, useState } from 'react';

import { CourseCard, SearchBar } from '../../components';
import { Button, FlexContainer } from '../../common';

import { getAuthorsNamesById } from '../../helpers';
import { ADD_NEW_COURSE_BUTTON_TEXT } from '../../constants';

interface CoursesProps extends FlexContainerProps {
	handleAddNewCourseButtonClick: MouseEventHandler<HTMLButtonElement>;
	courses: Course[];
	authors: Author[];
}

const Courses: FC<CoursesProps> = ({
	handleAddNewCourseButtonClick,
	courses,
	authors,
}) => {
	const [searchText, setSearchText] = useState<string>('');

	const renderCourses = (): JSX.Element[] =>
		courses
			.filter(
				({ id, title }) =>
					id.toLowerCase().includes(searchText.toLowerCase()) ||
					title.toLowerCase().includes(searchText.toLowerCase())
			)
			.map(
				({
					id,
					title,
					description,
					creationDate,
					duration,
					authors: authorsIds,
				}) => (
					<CourseCard
						id={id}
						key={id}
						title={title}
						description={description}
						creationDate={creationDate}
						duration={duration}
						authors={getAuthorsNamesById(authorsIds, authors) as string[]}
					/>
				)
			);

	return (
		<>
			<FlexContainer justify='space-around' flexwrap gap='1rem' addBorder>
				<SearchBar
					justify='space-between'
					align='center'
					flexwrap
					gap='2rem'
					setSearchText={setSearchText}
				/>
				<Button onClick={handleAddNewCourseButtonClick}>
					{ADD_NEW_COURSE_BUTTON_TEXT}
				</Button>
			</FlexContainer>
			<FlexContainer forwardedAs='ul' column gap='1rem'>
				{renderCourses()}
			</FlexContainer>
		</>
	);
};
export default Courses;
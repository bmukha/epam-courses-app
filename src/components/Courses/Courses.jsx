import { useState } from 'react';

import { CourseCard, SearchBar } from '../../components';
import { Button, FlexContainer } from '../../common';

import { getAuthorsNamesById } from '../../helpers';
import { ADD_NEW_COURSE_BUTTON_TEXT } from '../../constants';

import StyledCourses from './Courses.styles';

const Courses = ({ handleAddNewCourseButtonClick, courses, authors }) => {
	const [searchText, setSearchText] = useState('');

	const renderCourses = () =>
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
						key={id}
						title={title}
						description={description}
						creationDate={creationDate}
						duration={duration}
						authors={getAuthorsNamesById(authorsIds, authors).join(', ')}
					/>
				)
			);

	return (
		<StyledCourses column gap='1rem'>
			<FlexContainer
				className='automargin'
				justify='space-between'
				flexwrap
				gap='1rem'
			>
				<SearchBar
					justify='space-between'
					align='center'
					flexwrap
					setSearchText={setSearchText}
					gap='2rem'
					direction='row'
				/>
				<Button
					text={ADD_NEW_COURSE_BUTTON_TEXT}
					onClick={handleAddNewCourseButtonClick}
				/>
			</FlexContainer>
			<FlexContainer column gap='1rem' as='ul'>
				{renderCourses()}
			</FlexContainer>
		</StyledCourses>
	);
};
export default Courses;

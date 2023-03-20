import { useState } from 'react';

import { CourseCard, SearchBar } from '../../components';
import { Button, FlexContainer, BorderedFlexContainer } from '../../common';

import { getAuthorsNamesById } from '../../helpers';
import { ADD_NEW_COURSE_BUTTON_TEXT } from '../../constants';

import styled from 'styled-components';

const StyledCourses = styled(BorderedFlexContainer).attrs({ as: 'main' })`
	border-bottom-left-radius: 0;
	border-bottom-right-radius: 0;
	flex-grow: 1;

	.automargin button {
		margin: 0 auto;
	}
`;

const Courses = ({ handleAddNewCourseButtonClick, courses, authors }) => {
	const [coursesToDisplay, setCoursesToDisplay] = useState([...courses]);

	return (
		<StyledCourses column gap='1rem'>
			<BorderedFlexContainer
				className='automargin'
				justify='space-between'
				flexwrap
				gap='1rem'
			>
				<SearchBar
					justify='space-between'
					align='center'
					flexwrap
					courses={courses}
					setCoursesToDisplay={setCoursesToDisplay}
					gap='2rem'
					direction='row'
				/>
				<Button
					text={ADD_NEW_COURSE_BUTTON_TEXT}
					onClick={handleAddNewCourseButtonClick}
				/>
			</BorderedFlexContainer>
			<FlexContainer column gap='1rem' as='ul'>
				{coursesToDisplay.map(
					({
						id,
						title,
						description,
						creationDate,
						duration,
						authors: authorsIds,
					}) => {
						return (
							<CourseCard
								key={id}
								title={title}
								description={description}
								creationDate={creationDate}
								duration={duration}
								authors={getAuthorsNamesById(authorsIds, authors).join(', ')}
							/>
						);
					}
				)}
			</FlexContainer>
		</StyledCourses>
	);
};
export default Courses;

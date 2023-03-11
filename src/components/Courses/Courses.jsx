import { useState, useEffect } from 'react';

import { CourseCard, SearchBar } from '../../components';
import { Button, FlexContainer } from '../../common';

import { getAuthorsNamesById } from '../../helpers';

import styled from 'styled-components';

const StyledCourses = styled(FlexContainer)``;

const Courses = ({ handleAddNewCourseButtonClick, courses, authors }) => {
	const [query, setQuery] = useState('');
	const [filteredCourses, setFilteredCourses] = useState([]);

	useEffect(() => {
		const filteredCourses = courses.filter(({ id, title }) => {
			return (
				id.toLowerCase().includes(query.toLowerCase()) ||
				title.toLowerCase().includes(query.toLowerCase())
			);
		});
		setFilteredCourses(filteredCourses);
	}, [query, courses]);

	return (
		<StyledCourses column gap='2rem'>
			<SearchBar
				justify='space-between'
				align='center'
				wrap='wrap'
				query={query}
				setQuery={setQuery}
				gap='2rem'
				direction='row'
			/>
			<Button text='Add new course' onClick={handleAddNewCourseButtonClick} />
			<FlexContainer as='ul' direction='column' gap='1rem'>
				{filteredCourses.map(
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

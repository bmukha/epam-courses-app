import { useState, useEffect } from 'react';

import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';

import styled from 'styled-components';

import getAuthorsNamesById from '../../helpers/getAuthorsNamesById';
import Button from '../../common/Button/Button';

const StyledCourses = styled.main`
	& > ul {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
`;

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
		<StyledCourses>
			<SearchBar query={query} setQuery={setQuery} />
			<Button text='Add new course' onClick={handleAddNewCourseButtonClick} />
			<ul>
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
			</ul>
		</StyledCourses>
	);
};
export default Courses;

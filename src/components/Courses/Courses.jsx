import { useState } from 'react';

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

const Courses = ({
	handleAddNewCourseButtonClick,
	courses,
	setCourses,
	authors,
}) => {
	const [query, setQuery] = useState('');

	const displayFilteredCourses = () => {
		const filteredCourses = courses.filter(({ id, title }) => {
			return (
				id.toLowerCase().includes(query.toLowerCase()) ||
				title.toLowerCase().includes(query.toLowerCase())
			);
		});
		setCourses(filteredCourses);
	};

	return (
		<StyledCourses>
			<SearchBar
				query={query}
				setQuery={setQuery}
				displayFilteredCourses={displayFilteredCourses}
			/>
			<Button text='Add new course' onClick={handleAddNewCourseButtonClick} />
			<ul>
				{courses.map(
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

import { FC } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

import { FlexContainer, Button } from '../../common';

import { BACK_TO_COURSES_BUTTON_TEXT } from '../../constants';
import {
	dateFormatter,
	pipeDuration,
	getAuthorsNamesById,
} from '../../helpers';

import StyledCourseInfo from './CourseInfo.styles';

interface CourseInfoProps {
	courses: Course[];
	authors: Author[];
}

const CourseInfo: FC<CourseInfoProps> = ({ courses, authors }) => {
	const { id: courseId } = useParams<string>();
	const navigate = useNavigate();

	const course = courses.find((course) => course.id === courseId);

	if (!course) {
		navigate('/courses');
		return null;
	}

	const {
		id,
		title,
		authors: authorsIds,
		description,
		duration,
		creationDate,
	} = course;

	return (
		<StyledCourseInfo column gap='1rem' flexwrap>
			<Link to='/courses'>
				<Button>{BACK_TO_COURSES_BUTTON_TEXT}</Button>
			</Link>
			<h2>{title}</h2>
			<FlexContainer gap='1rem' flexwrap grow={3} shrink={3} basis='300px'>
				<p>{description}</p>
				<FlexContainer
					column
					gap='1rem'
					grow={1}
					shrink={1}
					basis='200px'
					flexwrap
				>
					<p className='nowrap'>
						<span>ID: </span>
						{id}
					</p>
					<p>
						<span>Duration: </span>
						{pipeDuration(duration)} hours
					</p>
					<p>
						<span>Creaded: </span>
						{dateFormatter(creationDate)}
					</p>
					<FlexContainer column gap='1rem'>
						<p>
							<span>Authors: </span>
						</p>
						{getAuthorsNamesById(authorsIds, authors).map((author) => (
							<p key={crypto.randomUUID()}>{author}</p>
						))}
					</FlexContainer>
				</FlexContainer>
			</FlexContainer>
		</StyledCourseInfo>
	);
};

export default CourseInfo;

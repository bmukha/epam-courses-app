import { FC, useEffect, useState } from 'react';
import {
	useParams,
	Link,
	useNavigate,
	NavigateFunction,
} from 'react-router-dom';

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
	const [course, setCourse] = useState<Course | undefined>(undefined);
	const navigate: NavigateFunction = useNavigate();
	const { courseId } = useParams<string>();

	useEffect(() => {
		const courseToRender: Course | undefined = courses.find(
			(course) => course.id === courseId
		);
		if (courseToRender) {
			setCourse(courseToRender);
		} else {
			navigate('/courses');
		}
	}, [courseId, courses, navigate]);

	return course ? (
		<StyledCourseInfo column gap='1rem' flexwrap addBorder>
			<Link to='/courses'>
				<Button>{BACK_TO_COURSES_BUTTON_TEXT}</Button>
			</Link>
			<h2>{course.title}</h2>
			<FlexContainer gap='1rem' flexwrap grow={3} shrink={3} basis='300px'>
				<p>{course.description}</p>
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
						{course.id}
					</p>
					<p>
						<span>Duration: </span>
						{pipeDuration(course.duration)} hours
					</p>
					<p>
						<span>Creaded: </span>
						{dateFormatter(course.creationDate)}
					</p>
					<FlexContainer column gap='1rem'>
						<p>
							<span>Authors: </span>
						</p>
						{getAuthorsNamesById(course.authors, authors).map((author) => (
							<p key={crypto.randomUUID()}>{author}</p>
						))}
					</FlexContainer>
				</FlexContainer>
			</FlexContainer>
		</StyledCourseInfo>
	) : null;
};

export default CourseInfo;

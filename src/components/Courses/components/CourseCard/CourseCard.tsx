import { FC, MouseEventHandler, ReactNode } from 'react';

import { FlexContainer, Button } from '../../../../common';

import { dateFormatter, pipeDuration } from '../../../../helpers';
import { SHOW_COURSE_BUTTON_TEXT } from '../../../../constants';

import StyledCourseCard from './CourseCard.styles';
import { useNavigate } from 'react-router-dom';
interface CourseCardProps extends Course {
	children?: ReactNode;
}

const CourseCard: FC<CourseCardProps> = ({
	id,
	title,
	description,
	creationDate,
	duration,
	authors,
}) => {
	const navigate = useNavigate();

	const handleShowCourseButtonClick: MouseEventHandler<
		HTMLButtonElement
	> = (): void => navigate(`/courses/${id}`);

	return (
		<StyledCourseCard forwardedAs='li' gap='1rem' flexwrap addBorder>
			<FlexContainer
				column
				gap='1rem'
				flexwrap
				grow={3}
				shrink={3}
				basis='300px'
			>
				<h2>{title}</h2>
				<p>{description}</p>
			</FlexContainer>
			<FlexContainer
				column
				gap='1rem'
				flexwrap
				grow={1}
				shrink={1}
				basis='200px'
				className='authors'
			>
				<p className='nowrap'>
					<span>Authors: </span>
					{authors.join(', ')}
				</p>
				<p>
					<span>Duration: </span>
					{pipeDuration(duration)} hours
				</p>
				<p>
					<span>Creaded: </span>
					{dateFormatter(creationDate)}
				</p>
				<Button onClick={handleShowCourseButtonClick}>
					{SHOW_COURSE_BUTTON_TEXT}
				</Button>
			</FlexContainer>
		</StyledCourseCard>
	);
};

export default CourseCard;

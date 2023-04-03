import { FC, MouseEventHandler, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { FlexContainer, Button } from '../../../../common';

import { dateFormatter, pipeDuration } from '../../../../helpers';
import { SHOW_COURSE_BUTTON_TEXT } from '../../../../constants';

import editIcon from '../../../../assets/edit.png';
import deleteIcon from '../../../../assets/delete.png';

import StyledCourseCard from './CourseCard.styles';
import { deleteCourse } from '../../../../store/courses/actionCreators';
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
	const dispatch = useDispatch();

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
				<FlexContainer gap='0.5rem'>
					<Button onClick={handleShowCourseButtonClick}>
						{SHOW_COURSE_BUTTON_TEXT}
					</Button>
					<Button
						onClick={(): void =>
							console.log('I have NO functionality in this module :(')
						}
					>
						<img src={editIcon} alt='edit' />
					</Button>
					<Button
						onClick={(): void => {
							dispatch(deleteCourse(id));
						}}
					>
						<img src={deleteIcon} alt='delete' />
					</Button>
				</FlexContainer>
			</FlexContainer>
		</StyledCourseCard>
	);
};

export default CourseCard;

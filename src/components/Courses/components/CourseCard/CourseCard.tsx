import { FC, MouseEventHandler } from 'react';
import { useNavigate } from 'react-router-dom';
import { Action } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import { FlexContainer, Button } from '../../../../common';

import {
	dateFormatter,
	getAuthorsNamesById,
	pipeDuration,
} from '../../../../helpers';
import { SHOW_COURSE_BUTTON_TEXT } from '../../../../constants';

import editIcon from '../../../../assets/edit.png';
import deleteIcon from '../../../../assets/delete.png';

import {
	userRoleSelector,
	userTokenSelector,
	authorsSelector,
} from '../../../../selectors';
import { asyncDeleteCourse } from '../../../../store/courses/thunk';

import StyledCourseCard from './CourseCard.styles';
interface CourseCardProps {
	courseToRender: Course;
}

const CourseCard: FC<CourseCardProps> = ({ courseToRender }) => {
	const navigate = useNavigate();
	const dispatch: ThunkDispatch<StoreState, void, Action> = useDispatch();
	const isUserAnAdmin = useSelector(userRoleSelector) === 'admin';
	const token = useSelector(userTokenSelector);
	const authors = useSelector(authorsSelector);
	const {
		id,
		title,
		description,
		creationDate,
		duration,
		authors: authorsIds,
	} = courseToRender;

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
					{getAuthorsNamesById(authorsIds, authors).join(', ')}
				</p>
				<p>
					<span>Duration: </span>
					{pipeDuration(duration)} hours
				</p>
				<p>
					<span>Creaded: </span>
					{dateFormatter(creationDate)}
				</p>
				<FlexContainer justify='center' gap='0.5rem'>
					<Button onClick={handleShowCourseButtonClick}>
						{SHOW_COURSE_BUTTON_TEXT}
					</Button>
					{isUserAnAdmin && (
						<>
							<Button onClick={(): void => navigate(`/courses/update/${id}`)}>
								<img src={editIcon} alt='edit' />
							</Button>
							<Button
								onClick={(): void => dispatch(asyncDeleteCourse(id, token))}
							>
								<img src={deleteIcon} alt='delete' />
							</Button>
						</>
					)}
				</FlexContainer>
			</FlexContainer>
		</StyledCourseCard>
	);
};

export default CourseCard;

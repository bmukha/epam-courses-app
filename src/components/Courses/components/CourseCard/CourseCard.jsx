import { FlexContainer, Button } from '../../../../common';

import { dateFormatter, pipeDuration } from '../../../../helpers';
import { SHOW_COURSE_BUTTON_TEXT } from '../../../../constants';

import StyledCourseCard from './CourseCard.styles';

const CourseCard = ({
	title,
	description,
	creationDate,
	duration,
	authors,
}) => {
	const handleButtonClick = () => console.log('Show course button clicked');

	return (
		<StyledCourseCard gap='1rem' flexwrap>
			<FlexContainer
				column
				gap='1rem'
				flexwrap
				grow='3'
				shrink='3'
				basis='300px'
			>
				<h2>{title}</h2>
				<p>{description}</p>
			</FlexContainer>
			<FlexContainer
				column
				gap='1rem'
				flexwrap
				grow='1'
				shrink='1'
				basis='200px'
				className='authors'
			>
				<p className='nowrap'>
					<span>Authors: </span>
					{authors}
				</p>
				<p>
					<span>Duration: </span>
					{pipeDuration(duration)} hours
				</p>
				<p>
					<span>Creaded: </span>
					{dateFormatter(creationDate)}
				</p>
				<Button text={SHOW_COURSE_BUTTON_TEXT} onClick={handleButtonClick} />
			</FlexContainer>
		</StyledCourseCard>
	);
};

export default CourseCard;

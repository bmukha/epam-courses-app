import {
	BorderedFlexContainer,
	FlexContainer,
	Button,
} from '../../../../common';
import { pipeDuration } from '../../../../helpers';

import styled from 'styled-components';

const StyledCourseCard = styled(BorderedFlexContainer).attrs({ as: 'li' })`
	.left-side {
		min-width: 300px;
		flex: 3 3 50%;
	}

	.right-side {
		min-width: 150px;
		flex: 1 1 25%;
		& button {
			align-self: center;
		}
	}

	p.nowrap {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	& span {
		font-weight: bold;
	}
`;

const CourseCard = ({
	title,
	description,
	creationDate,
	duration,
	authors,
}) => {
	const handleButtonClick = () => console.log('Show button clicked');

	return (
		<StyledCourseCard gap='1rem' wrap>
			<FlexContainer className='left-side' column gap='1rem'>
				<h3>{title}</h3>
				<p>{description}</p>
			</FlexContainer>
			<FlexContainer className='right-side' column gap='1rem'>
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
					{creationDate}
				</p>
				<Button text='Show course' onClick={handleButtonClick} />
			</FlexContainer>
		</StyledCourseCard>
	);
};

export default CourseCard;

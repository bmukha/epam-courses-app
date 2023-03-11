import { Button } from '../../../../common';
import { pipeDuration } from '../../../../helpers';

import styled from 'styled-components';

const StyledCourseCard = styled.li`
	box-shadow: 0 0 5px 3px lightgray;
	border-radius: 1rem;
	padding: 1rem;
	/* & > div {
		display: flex;
		flex-direction: column;
		gap: 1rem;

		&:first-child {
			flex: 3 3 25%;
		}

		&:last-child {
			flex: 1 1 25%;

			& > p {
				width: 100%;
			}

			& > p:first-child {
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
		}
	}

	& span {
		font-weight: bold;
	} */
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
		<StyledCourseCard>
			<div>
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
			<div>
				<p>
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
			</div>
		</StyledCourseCard>
	);
};

export default CourseCard;

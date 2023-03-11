import Button from '../../../../common/Button/Button';
import styled from 'styled-components';
import pipeDuration from '../../../../helpers/pipeDuration';

const StyledCourseCard = styled.li`
	border: 3px solid black;
	border-radius: 1rem;
	min-width: 0px;
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
	padding: 1rem;

	& > div {
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

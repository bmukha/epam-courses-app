import { FC, MouseEventHandler, useState } from 'react';
import { Navigate, NavigateFunction, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { CourseCard, SearchBar } from '../../components';
import { Button, FlexContainer } from '../../common';

import { getAuthorsNamesById } from '../../helpers';
import { ADD_NEW_COURSE_BUTTON_TEXT } from '../../constants';
import {
	authorsSelector,
	coursesSelector,
	userAuthStatusSelector,
	userRoleSelector,
} from '../../selectors';

const Courses: FC = () => {
	const [searchText, setSearchText] = useState<string>('');
	const navigate: NavigateFunction = useNavigate();
	const courses = useSelector(coursesSelector);
	const authors = useSelector(authorsSelector);
	const isUserLoggedIn = useSelector(userAuthStatusSelector);
	const isUserAnAdmin = useSelector(userRoleSelector) === 'admin';

	const handleAddNewCourseButtonClick: MouseEventHandler<
		HTMLButtonElement
	> = (): void => navigate('/courses/add');

	const renderCourses = (): JSX.Element[] =>
		courses
			.filter(
				({ id, title }) =>
					id.toLowerCase().includes(searchText.toLowerCase()) ||
					title.toLowerCase().includes(searchText.toLowerCase())
			)
			.map(
				({
					id,
					title,
					description,
					creationDate,
					duration,
					authors: authorsIds,
				}) => (
					<CourseCard
						id={id}
						key={id}
						title={title}
						description={description}
						creationDate={creationDate}
						duration={duration}
						authors={getAuthorsNamesById(authorsIds, authors) as string[]}
					/>
				)
			);

	return isUserLoggedIn ? (
		<>
			<FlexContainer justify='space-around' flexwrap gap='1rem' addBorder>
				<SearchBar
					justify='space-between'
					align='center'
					flexwrap
					gap='2rem'
					setSearchText={setSearchText}
				/>
				{isUserAnAdmin && (
					<Button onClick={handleAddNewCourseButtonClick}>
						{ADD_NEW_COURSE_BUTTON_TEXT}
					</Button>
				)}
			</FlexContainer>
			<FlexContainer forwardedAs='ul' column gap='1rem'>
				{renderCourses()}
			</FlexContainer>
		</>
	) : (
		<Navigate to='/login' replace />
	);
};
export default Courses;

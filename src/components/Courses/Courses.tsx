import { FC, MouseEventHandler, useEffect, useState } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { CourseCard, SearchBar } from '../../components';
import { Button, FlexContainer } from '../../common';

import { getAuthorsNamesById } from '../../helpers';
import { ADD_NEW_COURSE_BUTTON_TEXT } from '../../constants';
import { getAuthors, getCourses, getUserAuthStatus } from '../../selectors';
import { fetchAllAuthors, fetchAllCourses } from '../../services';
import { setCourses } from '../../store/courses/actionCreators';
import { setAuthors } from '../../store/authors/actionCreators';

const Courses: FC = () => {
	const [searchText, setSearchText] = useState<string>('');
	const navigate: NavigateFunction = useNavigate();
	const isUserLoggedIn = useSelector(getUserAuthStatus);
	const courses = useSelector(getCourses);
	const authors = useSelector(getAuthors);
	const dispatch = useDispatch();

	useEffect(() => {
		!isUserLoggedIn && navigate('/login');
	}, [isUserLoggedIn, navigate]);

	useEffect(() => {
		const populateInitialData = async () => {
			const data = await Promise.all([fetchAllCourses(), fetchAllAuthors()]);
			const [courses, authors] = data.map((response) => response?.result);
			dispatch(setCourses(courses));
			dispatch(setAuthors(authors));
		};
		populateInitialData();
	}, [dispatch]);

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

	return (
		<>
			<FlexContainer justify='space-around' flexwrap gap='1rem' addBorder>
				<SearchBar
					justify='space-between'
					align='center'
					flexwrap
					gap='2rem'
					setSearchText={setSearchText}
				/>
				<Button onClick={handleAddNewCourseButtonClick}>
					{ADD_NEW_COURSE_BUTTON_TEXT}
				</Button>
			</FlexContainer>
			<FlexContainer forwardedAs='ul' column gap='1rem'>
				{renderCourses()}
			</FlexContainer>
		</>
	);
};
export default Courses;

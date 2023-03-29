import {
	Dispatch,
	FormEventHandler,
	MouseEventHandler,
	KeyboardEvent,
	SetStateAction,
	useState,
	FC,
	useEffect,
} from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';

import { Input, Button, FlexContainer, Label, TextArea } from '../../common';
import FormGroupWrapper from './components/FormGroupWrapper';
import AuthorsListItem from './components/AuthorsListItem';

import { pipeDuration, dateGenerator } from '../../helpers';
import {
	ADD_AUTHOR_BUTTON_TEXT,
	CANCEL_BUTTON_TEXT,
	CREATE_AUTHOR_BUTTON_TEXT,
	CREATE_COURSE_BUTTON_TEXT,
	DELETE_AUTHOR_BUTTON_TEXT,
} from '../../constants';

import StyledCreateCourse from './CreateCourse.styles';
interface CreateCourseProps extends FlexContainerProps {
	authors: Author[];
	setAuthors: Dispatch<SetStateAction<Author[]>>;
	courses: Course[];
	setCourses: Dispatch<SetStateAction<Course[]>>;
	token: string | null;
}

const CreateCourse: FC<CreateCourseProps> = ({
	authors,
	setAuthors,
	courses,
	setCourses,
	token,
}) => {
	const [title, setTitle] = useState<string>('');
	const [description, setDescription] = useState<string>('');
	const [authorName, setAuthorName] = useState<string>('');
	const [duration, setDuration] = useState<number>(0);
	const [chosenAuthors, setChosenAuthors] = useState<Author[]>([]);
	const [unusedAuthors, setUnusedAuthors] = useState<Author[]>([...authors]);
	const navigate: NavigateFunction = useNavigate();

	useEffect(() => {
		!token && navigate('/login');
	}, [token, navigate]);

	const handleCreateAuthorButtonClick: MouseEventHandler<HTMLButtonElement> = (
		e
	): void => {
		e.preventDefault();

		if (authorName.trim().length < 2) {
			alert('Author name should be at least 2 characters long!');
			setAuthorName(authorName.trim());
			return;
		}

		const newAuthor = { name: authorName.trim(), id: crypto.randomUUID() };
		setAuthors([...authors, newAuthor]);
		setUnusedAuthors([...unusedAuthors, newAuthor]);
		setAuthorName('');
	};

	const handleCancelButtonClick: MouseEventHandler<
		HTMLButtonElement
	> = (): void => {
		navigate('/courses');
	};

	const handleDurationKeydownEvent = (e: KeyboardEvent): false | undefined => {
		const { key } = e;
		if (key === '.' || key === 'e') {
			e.preventDefault();
			return false;
		}
	};

	const handleCreateCourseFormSubmit: FormEventHandler<HTMLFormElement> = (
		e
	): void => {
		e.preventDefault();
		if (!title || !description || !duration || !chosenAuthors.length) {
			alert('Please, fill in all fields!');
			return;
		}

		if (title.trim().length < 2) {
			alert('Title should be at least 2 characters long!');
			setTitle(title.trim());
			return;
		}

		if (description.trim().length < 2) {
			alert('Description should be at least 2 characters long!');
			setDescription(description.trim());
			return;
		}

		if (duration <= 0) {
			alert('Duration should be at least one minute!');
			return;
		}

		const newCourse: Course = {
			id: crypto.randomUUID(),
			title: title.trim(),
			description: title.trim(),
			creationDate: dateGenerator(new Date()),
			duration: +duration,
			authors: chosenAuthors.map((author) => author.id),
		};

		setCourses([...courses, newCourse]);
		navigate('/courses');
	};

	const addCourseAuthor = (id: string): void => {
		const authorToAdd: Author | undefined = authors.find(
			(author) => author.id === id
		);
		if (authorToAdd) {
			setChosenAuthors([...chosenAuthors, authorToAdd]);
		}
		const filteredAuthors: Author[] = unusedAuthors.filter(
			(author) => author.id !== id
		);
		setUnusedAuthors(filteredAuthors);
	};

	const deleteCourseAuthor = (id: string): void => {
		const authorToDelete: Author | undefined = authors.find(
			(author) => author.id === id
		);
		if (authorToDelete) {
			setUnusedAuthors([...unusedAuthors, authorToDelete]);
		}
		const filteredAuthors: Author[] = chosenAuthors.filter(
			(author) => author.id !== id
		);
		setChosenAuthors(filteredAuthors);
	};

	return (
		<StyledCreateCourse
			forwardedAs='form'
			column
			gap='1rem'
			onSubmit={handleCreateCourseFormSubmit}
		>
			<FlexContainer
				flexwrap
				gap='1rem'
				align='center'
				justify='space-around'
				addBorder
			>
				<Label labelText='Title' align='center' gap='0.5rem'>
					<Input
						placeholder='Enter title...'
						type='text'
						value={title}
						minLength={2}
						onChange={({ target: { value } }) => setTitle(value)}
						required
					/>
				</Label>
				<FlexContainer gap='1rem'>
					<Button onClick={handleCancelButtonClick}>
						{CANCEL_BUTTON_TEXT}
					</Button>
					<Button type='submit'>{CREATE_COURSE_BUTTON_TEXT}</Button>
				</FlexContainer>
			</FlexContainer>
			<FlexContainer column addBorder>
				<Label labelText='Description' column gap='0.5rem'>
					<TextArea
						placeholder='Enter description...'
						rows={5}
						minLength={2}
						value={description}
						onChange={({ target: { value } }) => setDescription(value)}
						required
					/>
				</Label>
			</FlexContainer>
			<FlexContainer gap='1rem' flexwrap>
				<FormGroupWrapper title='Add author'>
					<Label labelText='Author name' align='center' gap='0.5rem'>
						<Input
							placeholder='Enter author name...'
							type='text'
							minLength={2}
							value={authorName}
							onChange={({ target: { value } }) => setAuthorName(value)}
						/>
					</Label>
					<Button onClick={handleCreateAuthorButtonClick}>
						{CREATE_AUTHOR_BUTTON_TEXT}
					</Button>
				</FormGroupWrapper>
				<FormGroupWrapper title='Authors'>
					<FlexContainer
						forwardedAs='ul'
						column
						justify='space-between'
						align='end'
						alignContent='space-around'
						gap='1rem'
						grow={1}
						shrink={1}
						flexwrap
					>
						{unusedAuthors.map((author) => (
							<AuthorsListItem key={author.id} forwardedAs='li'>
								<p>{author.name}</p>
								<Button onClick={() => addCourseAuthor(author.id)}>
									{ADD_AUTHOR_BUTTON_TEXT}
								</Button>
							</AuthorsListItem>
						))}
					</FlexContainer>
				</FormGroupWrapper>
			</FlexContainer>
			<FlexContainer gap='1rem' flexwrap>
				<FormGroupWrapper title='Duration'>
					<Label labelText='Duration' align='center' gap='0.5rem'>
						<Input
							placeholder='Enter duration...'
							type='number'
							min='1'
							step={1}
							value={duration}
							onKeyDown={handleDurationKeydownEvent}
							onChange={({ target: { value } }) => setDuration(+value)}
						/>
					</Label>
					<p>
						Duration: <span>{pipeDuration(duration)}</span> hours
					</p>
				</FormGroupWrapper>
				<FormGroupWrapper title='Course authors'>
					<FlexContainer
						forwardedAs='ul'
						column
						justify='space-between'
						align='end'
						alignContent='space-around'
						gap='1rem'
						grow={1}
						shrink={1}
						flexwrap
					>
						{chosenAuthors.map((author) => (
							<AuthorsListItem key={author.id}>
								<p>{author.name}</p>
								<Button onClick={() => deleteCourseAuthor(author.id)}>
									{DELETE_AUTHOR_BUTTON_TEXT}
								</Button>
							</AuthorsListItem>
						))}
					</FlexContainer>
				</FormGroupWrapper>
			</FlexContainer>
		</StyledCreateCourse>
	);
};

export default CreateCourse;

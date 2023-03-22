import { useState } from 'react';

import { Input, Button, FlexContainer } from '../../common';
import FormGroupWrapper from './components/FormGroupWrapper';
import AuthorsListItem from './components/AuthorsListItem';

import { pipeDuration, dateGenerator } from '../../helpers';
import {
	ADD_AUTHOR_BUTTON_TEXT,
	CANCEL_BUTTON_TEXT,
	CREATE_AUTHOR_BUTTON_TEXT,
	DELETE_AUTHOR_BUTTON_TEXT,
} from '../../constants';

import StyledCreateCourse from './CreateCourse.styles';

const CreateCourse = ({
	authors,
	setAuthors,
	courses,
	setCourses,
	setAddingMode,
}) => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [authorName, setAuthorName] = useState('');
	const [duration, setDuration] = useState('');
	const [chosenAuthors, setChosenAuthors] = useState([]);
	const [unusedAuthors, setUnusedAuthors] = useState([...authors]);

	const handleCreateAuthorButtonClick = (e) => {
		e.preventDefault();

		if (authorName.length < 2) {
			alert('Authors name should be at least 2 characters long!');
			return;
		}

		const newAuthor = { name: authorName, id: crypto.randomUUID() };
		setAuthors([...authors, newAuthor]);
		setUnusedAuthors([...unusedAuthors, newAuthor]);
		setAuthorName('');
	};

	const handleCancelButtonClick = () => {
		setAddingMode(false);
	};

	const handleCreateCourseButtonClick = (e) => {
		e.preventDefault();
		if (!title || !description || !duration || !chosenAuthors.length) {
			alert('Please, fill in all fields!');
			return;
		}

		if (title.length < 2) {
			alert('Title should be at least 2 characters long!');
			return;
		}

		if (description.length < 2) {
			alert('Description should be at least 2 characters long!');
			return;
		}

		if (parseInt(duration) <= 0) {
			alert('Duration should be at least one minute!');
			return;
		}

		const newCourse = {
			id: crypto.randomUUID(),
			title,
			description,
			creationDate: dateGenerator(new Date()),
			duration: +duration,
			authors: chosenAuthors.map((author) => author.id),
		};

		setCourses([...courses, newCourse]);

		setAddingMode(false);
	};

	const addCourseAuthor = (id) => {
		const authorToAdd = authors.find((author) => author.id === id);
		setChosenAuthors([...chosenAuthors, authorToAdd]);
		const filteredAuthors = unusedAuthors.filter((author) => author.id !== id);
		setUnusedAuthors(filteredAuthors);
	};

	const deleteCourseAuthor = (id) => {
		const authorToDelete = authors.find((author) => author.id === id);
		setUnusedAuthors([...unusedAuthors, authorToDelete]);
		const filteredAuthors = chosenAuthors.filter((author) => author.id !== id);
		setChosenAuthors(filteredAuthors);
	};

	return (
		<StyledCreateCourse column gap='1rem'>
			<FlexContainer flexwrap gap='1rem' align='center' justify='space-between'>
				<Input
					labelText='Title'
					placeholderText='Enter title...'
					type='text'
					value={title}
					minlength='2'
					onChange={({ target }) => setTitle(target.value)}
					required
				/>
				<FlexContainer gap='1rem'>
					<Button text={CANCEL_BUTTON_TEXT} onClick={handleCancelButtonClick} />
					<Button
						text='Create course'
						onClick={handleCreateCourseButtonClick}
						type='submit'
					/>
				</FlexContainer>
			</FlexContainer>
			<FlexContainer>
				<Input
					labelText='Description'
					placeholderText='Enter description...'
					type='textarea'
					rows='5'
					minlength='2'
					value={description}
					onChange={({ target }) => setDescription(target.value)}
					required
				/>
			</FlexContainer>
			<FlexContainer gap='1rem' flexwrap>
				<FormGroupWrapper title='Add author'>
					<Input
						labelText='Author name'
						placeholderText='Enter author name...'
						type='text'
						minlength='2'
						value={authorName}
						onChange={({ target }) => setAuthorName(target.value)}
					/>
					<Button
						text={CREATE_AUTHOR_BUTTON_TEXT}
						onClick={handleCreateAuthorButtonClick}
					/>
				</FormGroupWrapper>
				<FormGroupWrapper title='Authors'>
					<FlexContainer
						as='ul'
						column
						justify='space-between'
						align='end'
						alignContent='space-around'
						gap='1rem'
						grow='1'
						shrink='1'
						flexwrap
					>
						{unusedAuthors.map((author) => (
							<AuthorsListItem key={author.id}>
								<p>{author.name}</p>
								<Button
									text={ADD_AUTHOR_BUTTON_TEXT}
									onClick={() => addCourseAuthor(author.id)}
								/>
							</AuthorsListItem>
						))}
					</FlexContainer>
				</FormGroupWrapper>
			</FlexContainer>
			<FlexContainer gap='1rem' flexwrap>
				<FormGroupWrapper title='Duration'>
					<Input
						labelText='Duration'
						placeholderText='Enter duration...'
						type='number'
						min='1'
						step={1}
						value={duration}
						onChange={({ target }) => setDuration(target.value)}
					/>
					<p>
						Duration: <span>{pipeDuration(duration)}</span> hours
					</p>
				</FormGroupWrapper>
				<FormGroupWrapper title='Course authors'>
					<FlexContainer
						as='ul'
						column
						justify='space-between'
						align='end'
						alignContent='space-around'
						gap='1rem'
						grow='1'
						shrink='1'
						flexwrap
					>
						{chosenAuthors.map((author) => (
							<AuthorsListItem key={author.id}>
								<p>{author.name}</p>
								<Button
									text={DELETE_AUTHOR_BUTTON_TEXT}
									onClick={() => deleteCourseAuthor(author.id)}
								/>
							</AuthorsListItem>
						))}
					</FlexContainer>
				</FormGroupWrapper>
			</FlexContainer>
		</StyledCreateCourse>
	);
};

export default CreateCourse;

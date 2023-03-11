import { useState } from 'react';

import { Input, Button } from '../../common';
import { pipeDuration, dateGenerator } from '../../helpers';

import styled from 'styled-components';

const StyledCreateNewCourse = styled.form`
	border: 2px solid black;
	border-radius: 1rem;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	& > div {
		display: flex;
		justify-content: space-between;
	}

	textarea {
		width: 100%;
	}

	.horisontal-flex {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		/* min-width: fit-content; */
		align-items: start;
		justify-content: space-between;
		flex-grow: 1;

		& > div {
			flex-basis: 25%;
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 1rem;
			flex-grow: 1;
		}
	}
`;

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
		if (!authorName) {
			return;
		}
		const newAuthor = { name: authorName, id: crypto.randomUUID() };
		console.log('newAuthor', newAuthor);
		setAuthors([...authors, newAuthor]);
		setUnusedAuthors([...unusedAuthors, newAuthor]);
		setAuthorName('');
	};

	const handleCreateCourseButtonClick = (e) => {
		e.preventDefault();
		if (!title || !description || !duration || !chosenAuthors.length) {
			alert('Please, fill in all fields!');
			return;
		}
		const newCourse = {
			id: crypto.randomUUID(),
			title,
			description,
			creationDate: dateGenerator(new Date()),
			duration,
			authors: chosenAuthors.map((author) => author.id),
		};
		const newCourses = [...courses, newCourse];
		console.log('newCourses', newCourses);
		setCourses(newCourses);
		setAddingMode(false);
	};

	const addCourseAuthor = (e) => {
		e.preventDefault();
		const { key } = e.target.dataset;
		const authorToAdd = authors.find((author) => author.id === key);
		setChosenAuthors([...chosenAuthors, authorToAdd]);
		const filteredAuthors = unusedAuthors.filter((author) => author.id !== key);
		setUnusedAuthors(filteredAuthors);
	};

	const deleteCourseAuthor = (e) => {
		e.preventDefault();
		const { key } = e.target.dataset;
		const authorToDelete = authors.find((author) => author.id === key);
		setUnusedAuthors([...unusedAuthors, authorToDelete]);
		const filteredAuthors = chosenAuthors.filter((author) => author.id !== key);
		setChosenAuthors(filteredAuthors);
	};

	return (
		<StyledCreateNewCourse>
			<div>
				<Input
					labelText='Title'
					placeholderText='Enter title...'
					type='text'
					value={title}
					onChange={({ target }) => setTitle(target.value)}
				/>
				<Button text='Create course' onClick={handleCreateCourseButtonClick} />
			</div>
			<Input
				labelText='Description'
				placeholderText='Enter description...'
				type='textarea'
				rows='5'
				value={description}
				onChange={({ target }) => setDescription(target.value)}
			/>
			<div className='horisontal-flex'>
				<div>
					<h3>Add author</h3>
					<Input
						labelText='Author name'
						placeholderText='Enter author name...'
						type='text'
						value={authorName}
						onChange={({ target }) => setAuthorName(target.value)}
					/>
					<Button
						text='Create author'
						onClick={handleCreateAuthorButtonClick}
					/>
				</div>
				<div>
					<h3>Authors</h3>
					{unusedAuthors.map((author) => (
						<div className='horisontal-flex' key={author.id}>
							<p>{author.name}</p>
							<Button
								text='Add author'
								dataKey={author.id}
								onClick={addCourseAuthor}
							/>
						</div>
					))}
				</div>
			</div>
			<div className='horisontal-flex'>
				<div>
					<h3>Duration</h3>
					<Input
						labelText='Duration'
						placeholderText='Enter author name...'
						type='number'
						value={duration}
						onChange={({ target }) => setDuration(target.value)}
					/>
					<p>
						Duration: <span>{pipeDuration(duration)}</span> hours
					</p>
				</div>
				<div>
					<h3>Course authors</h3>
					{chosenAuthors.map((author) => (
						<div className='horisontal-flex' key={author.id}>
							<p>{author.name}</p>
							<Button
								text='Delete author'
								dataKey={author.id}
								onClick={deleteCourseAuthor}
							/>
						</div>
					))}
				</div>
			</div>
		</StyledCreateNewCourse>
	);
};

export default CreateCourse;

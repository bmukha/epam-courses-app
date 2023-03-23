const getAuthorsNamesById = (ids: Course['authors'], authors: Author[]) => {
	return ids.map((id) => authors.find((author) => author.id === id)?.name);
};

export default getAuthorsNamesById;

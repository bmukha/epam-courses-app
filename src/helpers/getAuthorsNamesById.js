const getAuthorsNamesById = (ids, authors) => {
	return ids.map((id) => authors.find((author) => author.id === id).name);
};

export default getAuthorsNamesById;

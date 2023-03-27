const getAuthorsNamesById = (
	ids: Course['authors'],
	authors: Author[]
): string[] => {
	return ids.reduce((res: string[], curr) => {
		const author = authors.find((author) => author.id === curr);
		if (author?.name) {
			res.push(author.name);
			return res;
		}
		return res;
	}, []);
};

export default getAuthorsNamesById;

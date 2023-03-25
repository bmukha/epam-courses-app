import { FC } from 'react';
import { Navigate } from 'react-router-dom';

const Home: FC = () => {
	const userFromLocalstorage = localStorage.getItem('coursesAppUser');

	let parsedUser = null;

	if (userFromLocalstorage) {
		parsedUser = JSON.parse(userFromLocalstorage);
	}

	return parsedUser ? <Navigate to='/courses' /> : <Navigate to='/login' />;
};
export default Home;

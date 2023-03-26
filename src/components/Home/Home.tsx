import { FC } from 'react';
import { Navigate } from 'react-router-dom';

const Home: FC = () => {
	const token: string | null = localStorage.getItem('coursesAppUser');

	return token ? <Navigate to='/courses' /> : <Navigate to='/login' />;
};
export default Home;

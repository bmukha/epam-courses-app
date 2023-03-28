import { FC } from 'react';
import { Navigate } from 'react-router-dom';

interface HomeProps {
	token: string | null;
}

const Home: FC<HomeProps> = ({ token }) =>
	token ? <Navigate to='/courses' /> : <Navigate to='/login' />;

export default Home;

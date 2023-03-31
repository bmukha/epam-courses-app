import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { isUserAuthSelector } from '../../selectors';

const Home: FC = () => {
	const isUserLoggedIn = useSelector(isUserAuthSelector);
	return isUserLoggedIn ? <Navigate to='/courses' /> : <Navigate to='/login' />;
};

export default Home;

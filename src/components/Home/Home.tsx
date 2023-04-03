import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { userAuthStatusSelector } from '../../selectors';

const Home: FC = () => {
	const isUserLoggedIn = useSelector(userAuthStatusSelector);
	console.log('FROM HOME COMPONENT isUserLoggedIn:', isUserLoggedIn);
	return isUserLoggedIn ? (
		<Navigate to='/courses' replace />
	) : (
		<Navigate to='/login' replace />
	);
};

export default Home;

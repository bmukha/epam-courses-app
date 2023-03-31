import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { userRoleSelector } from '../../selectors';

const PrivateRouter: FC = () => {
	const isUserAnAdmin = useSelector(userRoleSelector) === 'admin';

	return isUserAnAdmin ? <Outlet /> : <Navigate to='/courses' />;
};

export default PrivateRouter;
